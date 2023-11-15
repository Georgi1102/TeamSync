using Microsoft.EntityFrameworkCore;
using TeamSync.Data;
using TeamSync.Data.Models;

namespace TeamSync.Service
{
    public class EmployeeService
    {
        public readonly TeamSyncDbContext dbContext;

        public EmployeeService(TeamSyncDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<IEnumerable<Employee>> GetAllEmployees() 
        {
            var employees = await dbContext.Employees
                    .Include(c => c.EmployeeAssignments).ToListAsync();
            return employees;
        }

    }
}
