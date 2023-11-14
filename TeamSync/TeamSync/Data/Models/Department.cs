namespace TeamSync.Data.Models
{
    public class Department:BaseEntity
    {
        public string Name { get; set; }
        public List<long> Employees { get; set; }
    }
}
