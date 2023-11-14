namespace TeamSync.Data.Models
{
    public class Employee : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DepartmentId { get; set; } // Ensure consistent naming with the foreign key property
        public List<EmployeeAssignment> EmployeeAssignments { get; set; }
    }
}
