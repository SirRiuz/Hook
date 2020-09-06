
from server import app
from flask import request
from models.users import user
from controllers.baneos import isBaned
from controllers.post import post

#   Se encarga de buscar perfiles y   #
#   comunidades que esten publicas    #

@app.route('/search/' , methods=['POST'])
def search():
    query=request.form.get('query')
    queryArray = query.split(' ')
    usersProfileList = []
    for itemQueryArray in queryArray:
        response = user.select().where(user.nickName == itemQueryArray).execute()
        if len(response) > 0:
            if isBaned(response[0].id) is not True:
                usersProfileList.append({
                    'profile':{
                        'nickName':response[0].nickName,
                        'userName':response[0].userName,
                        'lastName':response[0].lastName,
                        'id':response[0].id,
                        'followers':''
                    }
                })

    return {
        'responseSize':len(usersProfileList),
        'profiles':usersProfileList
    }

@app.route('/search/hashtag/' , methods=['POST'])
def searchhashtag():
    hashtagName = request.form.get('hashtag')
    print()
    query = post.select().where(post.hashtags.contains(hashtagName)).execute()
    print(len(query))
    return str(len(query))
