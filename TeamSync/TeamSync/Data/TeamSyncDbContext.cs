using Microsoft.EntityFrameworkCore;
using TeamSync.Data.Models;

namespace TeamSync.Data
{
    public class TeamSyncDbContext : DbContext
    {
        public TeamSyncDbContext(DbContextOptions<TeamSyncDbContext> options)
           : base(options)
        {
        }

        public DbSet<Employee>? Employees { get; set; }
        public DbSet<Assignment>? Assignments { get; set; }
        public DbSet<Company>? Companies { get; set;}
        public DbSet<Department>? Departments { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmployeeAssignment>()
                .HasKey(ea => new { ea.EmployeeId, ea.AssignmentId });

            modelBuilder.Entity<EmployeeAssignment>()
                .HasOne(ea => ea.Employee)
                .WithMany(e => e.EmployeeAssignments)
                .HasForeignKey(ea => ea.EmployeeId);

            modelBuilder.Entity<EmployeeAssignment>()
                .HasOne(ea => ea.Assignment)
                .WithMany(a => a.EmployeeAssignments)
                .HasForeignKey(ea => ea.AssignmentId);
        }
    }
}
