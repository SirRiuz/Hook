
from server import app
from flask import request
from models.users import *
from flask import jsonify
from controllers.baneos import isBaned

@app.route('/login/' , methods=['POST'])
def login ():
    email = request.form.get('email')
    password = request.form.get('password')
    if request.method == 'POST':
        if compruebateEmail(email):
            session = user.select().where((user.email == email).bin_and(user.password == password)).execute()
            if len(session) is not 0:
                if isBaned(session[0].id):
                    return {
                        'error':{
                            'type':'ban-account',
                            'messege':'Tu cuenta a sido suspendida'
                        }
                    }
                return jsonify({
                        'session':{
                            'id':session[0].id,
                            'userName':session[0].userName,
                            'lastName':session[0].lastName,
                            'nickName':session[0].nickName,
                            'email':session[0].email,
                            'sexo':session[0].sexo,
                            'sessioKey':'',
                            'profileIcon':'',
                        }
                    })
        else:
            return({
                'error':{
                    'type':'',
                    'messege':'Este correo no esta registrado en nuestros servidores'
                }
            })
    return ({
        'error':{
            'type':'',
            'messege':'La contraseña no es correcta'
        }
    })

def userExits(userId):
    request = user.select().where(user.id == userId).execute()
    if len(request) > 0:
        return True
    return False

def compruebateEmail (email):
    if email is not '':
        isEmailExits = user.select().where((user.email == email)).execute()
        try:
            isEmailExits[0].email
            return True
        except:
            return False


