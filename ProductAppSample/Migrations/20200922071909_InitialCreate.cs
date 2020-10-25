using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductAppSample.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ProductName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    ProductType = table.Column<string>(type: "varchar(16)", nullable: false),
                    ProductDescription = table.Column<string>(type: "varchar(500)", nullable: false),
                    ProductSupplier = table.Column<string>(type: "varchar(100)", nullable: false),
                    ProductManufacturer = table.Column<string>(type: "varchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
