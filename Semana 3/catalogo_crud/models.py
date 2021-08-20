from app2 import db

class Producto(db.model):
    idProducto = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(45))
    descripcion = db.Column(db.String(255))
    precio = db.Column(db.Float)
    sku = db.Column(db.String(45))
    idCategoria = db.Column(db.Integer)