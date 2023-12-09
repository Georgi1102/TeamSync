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
        public DbSet<Company>? Companies { get; set;}
        public DbSet<Department>? Departments { get; set;}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>()
                .HasMany(c => c.Departments)
                .WithOne(d => d.Company)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Department>()
                .HasMany(d => d.Employees)
                .WithOne(e => e.Department)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
