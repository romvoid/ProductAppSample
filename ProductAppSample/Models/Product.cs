using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProductAppSample.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string ProductName { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string ProductType { get; set; }

        [Required]
        [Column(TypeName = "varchar(500)")]
        public string ProductDescription { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string ProductSupplier { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string ProductManufacturer { get; set; }
    }
}
