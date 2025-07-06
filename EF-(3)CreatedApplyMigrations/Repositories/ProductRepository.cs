using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;
using RetailInventory.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RetailInventory.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _context;
        public ProductRepository(AppDbContext context) => _context = context;

        public async Task<IEnumerable<Product>> GetAllAsync() => await _context.Products.Include(p => p.Category).ToListAsync();

        public async Task<Product> FindByIdAsync(int id) => await _context.Products.FindAsync(id);

        public async Task AddAsync(Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();
        }
    }
}
