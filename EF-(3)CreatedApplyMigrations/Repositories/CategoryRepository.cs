using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;
using RetailInventory.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RetailInventory.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDbContext _context;
        public CategoryRepository(AppDbContext context) => _context = context;

        public async Task<IEnumerable<Category>> GetAllAsync() => await _context.Categories.ToListAsync();

        public async Task AddAsync(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
        }
    }
}
