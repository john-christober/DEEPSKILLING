using System;
using System.Linq;

public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public string Category { get; set; }

    public Product(int productId, string productName, string category)
    {
        ProductId = productId;
        ProductName = productName;
        Category = category;
    }
}

class Program
{
    public static Product? LinearSearch(Product[] products, string name)
    {
        foreach (Product product in products)
        {
            if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
                return product;
        }
        return null;
    }

    public static Product? BinarySearch(Product[] products, string name)
    {
        int left = 0, right = products.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;
            int comparison = string.Compare(products[mid].ProductName, name, StringComparison.OrdinalIgnoreCase);

            if (comparison == 0)
                return products[mid];
            else if (comparison < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    static void Main()
    {
        Product[] products = new Product[]
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Footwear"),
            new Product(104, "Watch", "Accessories")
        };

        
        var result1 = LinearSearch(products, "Watch");
        Console.WriteLine(result1 != null ? $"Found: {result1.ProductName}" : "Product not found (Linear Search)");

        
        var sortedProducts = products.OrderBy(p => p.ProductName).ToArray();
        var result2 = BinarySearch(sortedProducts, "Gold");
        Console.WriteLine(result2 != null ? $"Found: {result2.ProductName}" : "Product not found (Binary Search)");
    }
}
