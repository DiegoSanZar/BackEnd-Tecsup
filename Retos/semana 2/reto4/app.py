from flask import Flask 

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