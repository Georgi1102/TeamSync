using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TeamSync.Data.Models;
using TeamSync.Service;

namespace TeamSync.Controllers
{
    [Route("/department")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly DepartmentService service;
        public DepartmentController(DepartmentService service)
        {
            this.service = service;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Department>>> GetAllDepartments()
        {
            try
            {
                return Ok(await this.service.GetAllDepartments());
            }
            catch (Exception ex)
            {
                // Log the exception or handle it accordingly
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
