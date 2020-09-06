
from server import app
from flask import request
from models.post import *
import random
import os
from controllers.baneos import isBaned
from controllers.notification import *


@app.route('/post/' , methods=['POST' , 'GET'])
def posts():
    id = request.form.get('id')
    if request.method == 'POST':
        generateID = random.randint(-999999999 , 999999999) * random.randint(-9999999 , 9999999)
        postId = abs(generateID ^ 2)
        video = request.files['file']
        messege = request.form.get('messege')
        postMode = request.form.get('postMode')
        hashtags = request.form.get('hashtags')
        try:
            post.create(id=postId , idPosteador=id , messege=messege , hashtags=hashtags)
            if saveFile(video , postId) == 'format-error':
                return {
                    'error':{
                        'type':'format-error',
                        'messege':'El formato de archivo no es valido , solo se permiten archivo con extencion .mp4'
                    }
                }
            createNotification(id , 'post-create' , 'Tu publicacion a sido creada' , rediraction='/post/{}/'.format(postId))
            return {
                'post':{
                    'postId':postId,
                    'posteador':id,
                    'messege':messege,
                    'mode':postMode,
                    'videoUrl':'http://localhost:5000/video/{}/'.format(postId),
                    'hashtags':hashtags
                }
            }
    
        except Exception as e:
            return{
                'error':{
                    'type':str(e),
                    'messege':'Erro al hacer la publicacion'
                }
            }

#   Valida que el formato que se va a subir sea .mp4
#   En caso que sea .mp4 lo guarda , de otro modo no

def saveFile (videoObject , id):
    fileName = os.path.splitext(videoObject.filename)[0]
    fileFormat = os.path.splitext(videoObject.filename)[1]
    print(fileFormat)
    if fileFormat == '.mp4':
        newName = '{}{}'.format(id , fileFormat)
        videoObject.save(os.path.join(app.config['SAVE_VIDEOS'], newName))
        return 'ok'
    return 'format-error'

@app.route('/post/<postId>/' , methods=['GET'])
def getVideo(postId):
    query = post.select().where(post.id == postId).execute()
    if len(query) > 0:
        if isBaned(query[0].idPosteador) is not True:
            return {
                'post':{
                    'postId':query[0].id,
                    'postMode':query[0].videoMode,
                    'likes':0,
                    'messege':query[0].messege,
                    'date':query[0].datePost,
                    'videoUrl':'http://localhost:5000/video/{}/'.format(query[0].id),
                    'reproductions':0,
                    'comments':[],
                    'hashtags':query[0].hashtags.split(' '),
                    'posteador':{}
                }
            }
        return {
            'error':{
                'type':'poster-ban',
                'messege':'La cuenta del posteador a sido suspendida'
            }
        }
    return {
        'error':{
            'type':'video-not-found',
            'messege':'Video no encontrado'
        }
    } , 404


def emitNotificationsToFollow():
    pass