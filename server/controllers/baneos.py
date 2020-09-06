

from server import app
from flask import request
from models.ban import ban
import random

@app.route('/ban/' , methods=['POST'])
def banUser():
    userId = request.form.get('id')
    motivo = request.form.get('messege')
    randomId = str(abs(random.randint(-999999999999999 , 99999999999999)))
    try:
        ban.create(banId=randomId, userBaned=userId , tempBan='nonne' , motive='Contenido erroneo')
        return {
            'ban':{
                'messege':'El usuario a sido baneado',
                'id':userId,
                'motivo':motivo,
                'duration':''
            }
        }
    except:
        ban.delete().where(ban.userBaned == userId).execute()
        return {
            'ban':{
                'messege':'El usuario a sido desbaneado !',
            }
        }

#
#   Retorna True si el usuario esta baneado
#   No lo contrario retornara false
#
def isBaned(userID):
    response = ban.select().where(ban.userBaned==userID).execute()
    if len(response) > 0:
        return True    
    
    return False


