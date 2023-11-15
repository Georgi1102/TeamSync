using Microsoft.EntityFrameworkCore;
using TeamSync.Data;
using TeamSync.Data.Models;

namespace TeamSync.Service
{
    public class CompanyService
    {
        private readonly TeamSyncDbContext dbContext;
        private readonly Company company;


        public CompanyService(TeamSyncDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<Company>> GetAll()
        {
            var companies = await dbContext.Companies
                  .Include(c => c.Employees)
                      .ThenInclude(e => e.EmployeeAssignments)
                  .Include(c => c.Departments)
                      .ThenInclude(d => d.Employees)
                  .ToListAsync();

            return companies;
        }
    }
}
