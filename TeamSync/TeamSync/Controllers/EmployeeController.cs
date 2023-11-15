using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamSync.Data.Models;
using TeamSync.Service;

namespace TeamSync.Controllers
{
    [Route("/employee")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService service;
        public EmployeeController(EmployeeService service)
        {
            this.service = service;  
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmployees()
        {
            try
            {
                return Ok(await this.service.GetAllEmployees());
            }
            catch (Exception ex)
            {
                // Log the exception or handle it accordingly
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
