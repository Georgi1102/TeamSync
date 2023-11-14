namespace TeamSync.Data.Models
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public long DepartmentId { get; set; }
        public List<long> Assignments { get; set; }
    }
}
