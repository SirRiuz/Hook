


from models.users import user
from server import app
from flask import (request)


@app.route('/admin/get/users/' , methods=['POST'])
def getUser():
    usersList = []
    for usuers in user.select().execute():
        usersList.append({
            'user':{
                'userId':usuers.id,
                'email':usuers.email,
                'password':usuers.password,
                'nickName':usuers.nickName,
                'userName':usuers.userName,
                'range':'',
                'followers':'',
                'profile':{
                    'avatar':'',
                    'banner':'',
                    'description':''
                }
            }
        })
    return {
        'usersList':usersList
    }