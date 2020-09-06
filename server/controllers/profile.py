
from server import app
from flask import request
from models.users import *
from flask import jsonify
from controllers.baneos import isBaned

@app.route('/profile/' , methods=['POST'])
def profile():
    profileName = request.form.get('nickName')
    modeProfile = 'espect'
    response = user.select().where(user.nickName == profileName).execute()
    if len(response) > 0:
        if isBaned(response[0].id):
            return {
                'error':{
                    'type':'ban-profile',
                    'messege':'Esta cuenta a sido suspendida'
                }
            }

        return {
            'profile':{
                'id':response[0].id,
                'name':response[0].userName,
                'lastName':response[0].lastName,
                'mode':modeProfile,
                'videos':[],
                'moments':[],
                'followers':0,
                'description':response[0].description,
                'email':response[0].email,
                'videos':[]
            }
        }

    return {
        'error':{
            'type':'',
            'messege':'Profile not exit'
        }
    }
