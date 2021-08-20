from flask_restful import Resource
from flask import request
from models import Category, Book
from app import db
from schemas import CategorySchema, BookSchema

# @app.route('/')
# def hello_world():
#     return "hello world"

class Helloworld(Resource):
    def get(self):
        return {'hello': 'world'}

class CategoriesController(Resource):

    def get(self):
        #obtener la coleccion de categorias
        categories = Category.query.all()
        #instamciar el serializador Schema
        schema = CategorySchema()
        #serializar nuestra coleccion de categorias
        data = schema.dump(categories, many=True)
        #retornar datos serializados 
        return data

    def post(self):
        #obtener el payload json
        data = request.json
        #Crear una nueva instancia de Category
        new_category = Category(**data) 
        #Ejecutar transaccion 
        db.session.add(new_category)
        db.session.commit()

        return {"status":"ok"}, 201
    
class BooksController(Resource):
    def post(self):
        data = request.json
        new_book = Book(**data)
        db.session.add(new_book) #INSERT INTO book
        db.session.commit()

        return {"status":"ok"}, 201

    def get(self):
        books = Book.query.all()
        schema = BookSchema()
        data = schema.dump(books, many=True)
        return data

class BooksByCategoryController(Resource):
    def get(self, id):
        books = Book.query.filter_by(idCategory = id)
        schema = BookSchema()
        data = schema.dump(books, many=True)
        return data