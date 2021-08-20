from flask import Flask
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
# from sqlalchemy.orm import Marshmallow


app = Flask(__name__)
api = Api(app)
ma = Marshmallow(app)

#configurando parametros de conexion
#mysql+pymysql://USER:PASSWORDSERVER/DATABASE
conn = "mysql+pymysql://root:contraseña123@localhost/librarydb"
app.config['SQLALCHEMY_DATABASE_URI'] = conn

db = SQLAlchemy(app)

from controllers import Helloworld
from controllers import CategoriesController
from controllers import BooksController, BooksByCategoryController
# from controllers import CategoryController

api.add_resource(Helloworld, '/')
api.add_resource(CategoriesController, '/categories')
api.add_resource(BooksController, '/books')
# api.add_resource(CategoryController, '/category')

api.add_resource(BooksByCategoryController, '/category/<id>/books')