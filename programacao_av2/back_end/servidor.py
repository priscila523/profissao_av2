from config import *
from modelo import Profissao

@app.route("/")
def inicio():
    return 'Sistema de cadastro de profissoes. '+\
        '<a href="/listar_profissoes">Operação listar</a>'

@app.route("/listar_profissoes")
def listar_profissoes():
    profissoes = db.session.query(Profissao).all()
    profissoes_em_json = [ x.json() for x in profissoes]
    resposta = jsonify(profissoes_em_json)
    resposta.headers.add("Access-Control-Allow-Origin", "*")
    return resposta

app.run(debug=True)