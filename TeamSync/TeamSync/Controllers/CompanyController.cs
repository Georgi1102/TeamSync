using Microsoft.AspNetCore.Mvc;
using TeamSync.Data.Models;
using TeamSync.Service;

namespace TeamSync.Controllers
{
    [Route("/company")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly CompanyService service;

        public CompanyController(CompanyService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> GetAllCompanies()
        {
            try
            {
                var companies = await this.service.GetAll();
                return Ok(companies);
            }
            catch (Exception ex)
            {
                // Log the exception or handle it accordingly
                return StatusCode(500, "Internal server error");
            }
        }
    }
}
