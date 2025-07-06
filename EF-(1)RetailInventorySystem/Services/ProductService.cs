using RetailInventory.Models;
using RetailInventory.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RetailInventory.Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepo;
        public ProductService(IProductRepository productRepo) => _productRepo = productRepo;

        public Task<IEnumerable<Product>> GetProductsAsync() => _productRepo.GetAllAsync();
        public Task<Product> GetByIdAsync(int id) => _productRepo.FindByIdAsync(id);
        public Task AddAsync(Product product) => _productRepo.AddAsync(product);
    }
}
