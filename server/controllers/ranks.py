


from server import app
from flask import request
from models.rank import rank

#2308206242809315
@app.route('/rank/' , methods=['POST'])
def createAndDeleteRanck():
    if request.method == 'POST':
        # userId
        userId = request.form.get('id')
        print('userId -> ' , userId)
        try:
            print(userId)
            rank.create(userId=userId , ranckName='check')
            return 'CREATE RANGE !!'
        except:
            rank.delete().where(rank.userId == userId).execute()
            return 'RENGE DELETE !!'


def getRank(userId):
    query = rank.select().where(rank.userId == userId).execute()
    if len(query) > 0:
        return query[0].ranckName
    return 'user'
