namespace TeamSync.Data.Models
{
    public class Assignment : BaseEntity
    {
        public string Description { get; set; }
        public string Status { get; set; }

        // Navigation property for related employees
        public List<EmployeeAssignment> EmployeeAssignments { get; set; }

    }
}
