CREATE TABLE [dbo].[Products] (
    [ProductId]           INT            IDENTITY (1, 1) NOT NULL,
    [ProductName]         NVARCHAR (100) NOT NULL,
    [ProductType]         VARCHAR (16)   NOT NULL,
    [ProductDescription]  VARCHAR (500)  NOT NULL,
    [ProductSupplier]     VARCHAR (100)  NOT NULL,
    [ProductManufacturer] VARCHAR (100)  NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([ProductId] ASC)
);

