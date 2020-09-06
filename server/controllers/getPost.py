
from server import app
from flask import request
from models.post import *
from flask import jsonify
from controllers.follow import (getFollow)
from controllers.baneos import isBaned
from models.users import user
from controllers.ranks import getRank

@app.route('/get/post/' , methods=['POST'])
def getPost():
    myId = request.form.get('id')
    limit  = request.form.get('limit')
    nextPage = request.form.get('next')
    listPost = []
    followList = getFollow(myId)
    followList.append(myId)
    if isBaned(myId):
        return {
            'error':{
                'type':'ban-account',
                'messege':'Tu cuenta a sido baneada'
            }
        }

    for id in followList:
        for postsItem in post.select().where(post.idPosteador == id).limit(limit).offset(nextPage).execute():
            userProps = user.select().where(user.id == id).execute()
            listPost.append({
                'post':{
                    'postId':postsItem.id,
                    'postMode':postsItem.videoMode,
                    'likes':0,
                    'messege':postsItem.messege,
                    'date':postsItem.datePost,
                    'videoUrl':'http://localhost:5000/video/{}/'.format(postsItem.id),
                    'reproductions':0,
                    'comments':[],
                    'hashtags':postsItem.hashtags.split(' '),
                    'posteador':{
                        'id':postsItem.idPosteador,
                        'nickName':userProps[0].nickName,
                        'userName':userProps[0].userName,
                        'lastName':'',
                        'followers':'',
                        'rank':getRank(userProps[0].id),
                        'profileIcon':'http://127.0.0.1:5000/get/imge/{}'.format(myId)
                    }
                }
            })

    return jsonify({
        'postNumber':len(listPost),
        'next':int(nextPage) + int(limit),
        'limit':limit,
        'videos':listPost,
        'status':getStatus(listPost)
    })

#   Devuelve el estado de carga del cliente
def getStatus(videoArray):
    if len(videoArray) > 0:
        return 'loader'
    return 'stoped'
