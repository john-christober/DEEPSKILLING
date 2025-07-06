using RetailInventory.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RetailInventory.Repositories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetAllAsync();
        Task AddAsync(Category category);
    }
}
