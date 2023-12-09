﻿using Microsoft.EntityFrameworkCore;
using TeamSync.Data.Models;
using TeamSync.Data;

namespace TeamSync.Service
{
    public class DepartmentService
    {
        private readonly TeamSyncDbContext dbContext;

        public DepartmentService(TeamSyncDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<Department>> GetAllDepartmentsAsync()
        {
            return await dbContext.Departments.ToListAsync();
        }

        public async Task<Department> GetDepartmentByIdAsync(int departmentId)
        {
            return await dbContext.Departments.FindAsync(departmentId);
        }

        public async Task CreateDepartmentAsync(Department newDepartment)
        {
            dbContext.Departments.Add(newDepartment);
            await dbContext.SaveChangesAsync();
        }

        public async Task UpdateDepartmentAsync(Department updatedDepartment)
        {
            dbContext.Entry(updatedDepartment).State = EntityState.Modified;
            await dbContext.SaveChangesAsync();
        }

        public async Task DeleteDepartmentAsync(int departmentId)
        {
            var department = await dbContext.Departments.FindAsync(departmentId);

            if (department != null)
            {
                dbContext.Departments.Remove(department);
                await dbContext.SaveChangesAsync();
            }
        }
    }
}
