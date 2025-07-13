using AspCoreApi.Filter;
using AspCoreApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspCoreApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [ServiceFilter(typeof(CustomAuthFilter))]
    
    // For filtering auth (step 2)
    public class EmployeeController : ControllerBase
    {
        private List<Employee> _employees;

        public EmployeeController()
        {
            _employees = GetStandardEmployeeList();
        }

        private List<Employee> GetStandardEmployeeList()
        {
            return new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "John Doe",
                Salary = 50000,
                Permanent = true,
                Department = new Department { Id = 1, Name = "HR" },
                Skills = new List<Skill> {
                    new Skill { Id = 1, Name = "Communication" },
                    new Skill { Id = 2, Name = "Teamwork" }
                },
                DateOfBirth = new DateTime(1990, 5, 1)
            }
        };
        }

        [HttpGet("standard")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<List<Employee>> GetStandard()
        {
            throw new Exception("Simulated exception for demo"); 
            return Ok(_employees);
        }

        [HttpPost]
        public ActionResult CreateEmployee([FromBody] Employee employee)
        {
            if (employee == null)
                return BadRequest("Invalid data");
            _employees.Add(employee);
            return Ok(employee);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateEmployee(int id, [FromBody] Employee employee)
        {
            var existing = _employees.FirstOrDefault(e => e.Id == id);
            if (existing == null)
                return NotFound();
            existing.Name = employee.Name;
            return NoContent();
        }
    }

}
