namespace TeamSync.Data.Models
{
    public class Department : BaseEntity
    {
        public string name { get; set; }
        List<long> employeeIds { get; set; }
    }
}