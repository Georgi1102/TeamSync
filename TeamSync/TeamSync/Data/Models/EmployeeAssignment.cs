namespace TeamSync.Data.Models
{
    public class EmployeeAssignment : BaseEntity
    {
        // Foreign key with the same data type as the primary key of Employee
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }

        // Foreign key with the same data type as the primary key of Assignment
        public int AssignmentId { get; set; }
        public Assignment Assignment { get; set; }
    }
}
