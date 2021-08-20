from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_marshmallow import fields
from flask import json
from flask_sqlalchemy import Column
app = Flask(__name__)
#Definir el valor de la constante 
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:contraseña123@localhost/catalogo"

#Ampliar Flask a SQLalchemy
db = SQLAlchemy(app) 
#Ampliar Flask con Marshmallow
ma = Marshmallow(app)

#Representacion logica de la tabla productos 
class Producto(db.model):
    idProducto = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(45))
    descripcion = db.Column(db.String(255))
    precio = db.Column(db.Float)
    sku = db.Column(db.String(45))
    idCategoria = db.Column(db.Integer)

    @property
    def precio_pen(self):
        return f"s./{self.precio}"
    
class ProductoSchema(ma.Schema):
    class Meta:
        fields = {"nombre","precio"}


@app.route('/')
def hello_world():
    return "hello world"

@app.route('/productos')
def list_producto():
    # SELECT * FROM Producto
    #Ejecutar consulta de seleccion
    #usando los emtodos del ORM 
    products = Producto.query.all()
    schema = ProductoSchema()
    data = schema.dump(products, many=True)
    
 