using Microsoft.EntityFrameworkCore;
using TeamSync.Data;
using TeamSync.Data.Models;

namespace TeamSync.Service
{
    public class DepartmentService
    {
        private readonly TeamSyncDbContext dbContext;
        private readonly Department department;
        public DepartmentService(TeamSyncDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<IEnumerable<Department>> GetAllDepartments()
        {
            var departments = await dbContext.Departments
                .Include(c => c.Employees)
                .ThenInclude(e => e.EmployeeAssignments)
                .ToListAsync();
            return departments;
        }
        

}
    
}
