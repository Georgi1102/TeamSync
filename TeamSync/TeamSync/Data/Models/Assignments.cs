namespace TeamSync.Data.Models
{
    public class Assignments:BaseEntity
    {
        public string Description { get; set; }
        public string Status { get; set; }
        public List<long> Employees {  get; set; }
        
    }
}
