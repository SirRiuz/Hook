

from flask import (request , jsonify) 
from server import app
from controllers.auth import userExits
from models.users import *


import base64
import random
from hashlib import sha256



@app.route('/auth/social/' , methods=['POST'])
def authSocial():
    #resoinse = request.json
    #print(resoinse)
    id = request.form.get('id')
    if userExits(id):
        return getSessionById(id)


    return createUser()

def createUser():
    baseCode = base64.encodebytes(str(abs(random.randint(-999999999999999999,999999999999999999))).encode())
    password = sha256(str(baseCode).encode()).hexdigest()
    try:
        user.create(
            id=request.form.get('id'),
            userName=request.form.get('userName'), 
            lastName=request.form.get('lastName') , 
            nickName=request.form.get('nickName') , 
            email=request.form.get('email'),
            password=password , 
            sexo='',
            description=''
        )
        return getSessionById(request.form.get('id'))

    except Exception as e:
        return {
            'error':{
                'type':str(e),
                'messege':'Erro al registrar el usuario'
            }
        }

def getSessionById(id):
    session = user.select().where(user.id == id).execute()
    if len(session) > 0:
        return jsonify({
                'session':{
                    'id':request.form.get('id'),
                    'userName':request.form.get('userName'),
                    'lastName':request.form.get('lastName'),
                    'nickName':request.form.get('nickName'),
                    'email':request.form.get('email'),
                    'sexo':'',
                    'sessioKey':'',
                    'profileIcon':'',
                }
            })
    
    return {
        'error':{
            'type':'erro-inesperado',
            'messege':'Ocurrio un error que do devia pasar ...'
        }
    }


