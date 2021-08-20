--Seleccionar todos los registros de Productos
SELECT * FROM Producto;

--Seleccionar los nombres de las categorias
SELECT Nombre FROM Categoria;

--Obtener el producto mas caro de la tabla Producto
SELECT * FROM Producto
ORDER BY Precio DESC
LIMIT 1

--Obtener los productos cuyo precio esten entre 2 y 3 
SELECT * Producto
WHERE Precio BETWEEN 2 AND 3

--insertar un nuevo producto (zanahorias)
INSERT INTO Producto
(Nombre, Descripcion, Precio, SKU, idCategoria)
VALUES
("Zanahoria", "baby zanahoria", 4.5, "VG002", 1)

--Eliminar el Producto con id
DELETE FROM Producto
WHERE idProducto = 1

--Actualizar el precio del producto
UPDATE Producto
SET Precio = 2.75
WHERE idProducto = 2

