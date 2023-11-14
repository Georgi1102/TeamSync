namespace TeamSync.Data.Models
{
    public class Company:BaseEntity
    {
        public string Name { get; set; }
        public List<long> Employees { get; set; }
        public List<long> Departments { get; set; }
    }
}
