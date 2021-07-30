from flask import Flask, request 

app = Flask(__name__)

departamentos = {
    'depa1' : {
        'nombre':'Lima',
        'codigo': '001'
    },
    'depa2' : {
        'nombre':'Arequipa',
        'codigo':'002'
    }
}

@app.route('/')
def index():
    return "retorno departamentos"

@app.route('/departamentos.json')
def get_departamentos():
    return departamentos


#reto 5

@app.route('/newitem', methods=['POST'])
def post_item():
    data = request.json
    departamentos[data["id"]] = {
        "nombre": data["nombre"],
        "codigo": data["codigo"]
    }
    return 'OK', 201

