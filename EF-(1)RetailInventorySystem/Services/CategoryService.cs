using RetailInventory.Models;
using RetailInventory.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RetailInventory.Services
{
    public class CategoryService
    {
        private readonly ICategoryRepository _categoryRepo;
        public CategoryService(ICategoryRepository categoryRepo) => _categoryRepo = categoryRepo;

        public Task<IEnumerable<Category>> GetCategoriesAsync() => _categoryRepo.GetAllAsync();
        public Task AddAsync(Category category) => _categoryRepo.AddAsync(category);
    }
}
