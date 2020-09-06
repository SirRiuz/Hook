

from server import app
from flask import request
from models.users import *
from flask import jsonify
from scripts.hashEncodeLib import *

@app.route('/register/' , methods=['POST'])
def register ():
    userName=request.form.get('userName')
    lastName=request.form.get('lastName')
    nickName=request.form.get('nickName')
    email=request.form.get('email')
    password=request.form.get('password')
    sexo=request.form.get('sexo')
    description = ''


    #TEST - anita@gmail.com - 123

    if request.method == 'POST':
        try:
            user.create(userName=userName , lastName=lastName , nickName=nickName , email=toHash(email) ,password=toHash(password) , sexo=sexo,
            description=description)
            print('Email - ' , toHash(email))
            print('Password - ' , toHash(password))
            return 'usuario registrado !!'
        except Exception as e:
            return {
                'error':{
                    'type':str(e),
                    'messege':'Erro al registrar el usuario'
                }
            }
