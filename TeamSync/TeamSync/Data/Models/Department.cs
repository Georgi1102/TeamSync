namespace TeamSync.Data.Models
{
    public class Department : BaseEntity
    {
        public string Name { get; set; }

        // Navigation property for related employees
        public List<Employee> Employees { get; set; }
    }
}
