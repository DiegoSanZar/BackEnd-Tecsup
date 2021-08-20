from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask import render_template

app = Flask(__name__)
#Definir el valor de la constante 
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:contraseña123@localhost/catalogo"

db = SQLAlchemy(app) 

from models import Producto

@app.route("/products")
def get_productos():
    products = Producto.query.all()
    return render_template("index.html", products = products)

@app.route("/product/<id>")
def get_product(id):
    products = Producto.query.filter_by(idProducto = id).first