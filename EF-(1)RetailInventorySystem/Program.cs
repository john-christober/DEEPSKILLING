using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;
using RetailInventory.Repositories;
using RetailInventory.Services;
using RetailInventory.Models;

internal class Program
{
    private static async Task Main(string[] args)
    {
        var host = Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((context, config) =>
            {
                config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            })
            .ConfigureServices((context, services) =>
            {
                var connectionString = context.Configuration.GetConnectionString("DefaultConnection");
                services.AddDbContext<AppDbContext>(options =>
                    options.UseSqlServer(connectionString));
                services.AddScoped<IProductRepository, ProductRepository>();
                services.AddScoped<ICategoryRepository, CategoryRepository>();
                services.AddScoped<CategoryService>();
                services.AddScoped<ProductService>();
            })
            .Build();

        using var scope = host.Services.CreateScope();
        var services = scope.ServiceProvider;
        var dbContext = services.GetRequiredService<AppDbContext>();
        await dbContext.Database.MigrateAsync();

        var categoryService = services.GetRequiredService<CategoryService>();
        var productService = services.GetRequiredService<ProductService>();

        if (!dbContext.Categories.Any())
        {
            var electronics = new Category { Name = "Electronics" };
            var groceries = new Category { Name = "Groceries" };
            await categoryService.AddAsync(electronics);
            await categoryService.AddAsync(groceries);

            await productService.AddAsync(new Product { Name = "Laptop", Price = 75000, Category = electronics });
            await productService.AddAsync(new Product { Name = "Rice Bag", Price = 1200, Category = groceries });
        }

        Console.WriteLine("\nAll Products:");
        var products = await productService.GetProductsAsync();
        foreach (var p in products)
            Console.WriteLine($"{p.Name} - ₹{p.Price}");

        var expensive = products.FirstOrDefault(p => p.Price > 50000);
        if (expensive != null)
            Console.WriteLine($"\nExpensive: {expensive.Name}");

        await host.RunAsync();
    }
}
