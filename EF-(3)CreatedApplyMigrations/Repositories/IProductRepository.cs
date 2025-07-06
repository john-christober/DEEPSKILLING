using RetailInventory.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RetailInventory.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllAsync();
        Task<Product> FindByIdAsync(int id);
        Task AddAsync(Product product);
    }
}
