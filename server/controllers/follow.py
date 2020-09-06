
from server import app
from flask import request
from models.followers import *
from flask import jsonify

#
#   Este metodo se encarga de realizar el follow con otros usuarios
#

@app.route('/follow/' , methods=['POST'])
def follow ():
    emisor = request.form.get('myId')
    reseptor = request.form.get('reseptorId')
    
    if emisor == reseptor:
        return {
            'error':{
                'type':'auto-follow-error',
                'messege':'No puedes seguirte ati mismo'
            }
        }

    try:
        follower.select().where((follower.emisorId == emisor).bin_and(follower.reseptorId == reseptor)).get()
        follower.delete().where((follower.emisorId == emisor).bin_and(follower.reseptorId == reseptor)).execute()
        return jsonify({
            'follow':{
                'state':'not-follow',
                'messege':'Dejaste de seguir a {}'.format(reseptor),
                'followers':len(getFollowers(reseptor)),
                'listFollowers':getFollowers(reseptor)
            }
        })
    except:
        follower.create(emisorId = emisor , reseptorId = reseptor)
        return jsonify({
            'follow':{
                'state':'follow',
                'messege':'Ahora estas siguiendo a {}'.format(reseptor),
                'followers':len(getFollowers(reseptor)),
                'listFollowers':getFollowers(reseptor)
            }
        })

#
#   Restorna una lista de las persona que siguen a otro
#

def getFollowers(resept):
    followersList = []
    for followerI in follower.select().where(follower.reseptorId == resept).execute():
        followersList.append(followerI.emisorId)
    
    return followersList

def getFollow(emisor):
    followersList = []
    for followerI in follower.select().where(follower.emisorId == emisor).execute():
        followersList.append(followerI.reseptorId)
    
    return followersList
