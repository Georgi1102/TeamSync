using Microsoft.EntityFrameworkCore;

namespace TeamSync.Data
{
    public class TeamSyncDbContext : DbContext
    {
        public TeamSyncDbContext(DbContextOptions<TeamSyncDbContext> options)
           : base(options)
        {
        }


    }
}
