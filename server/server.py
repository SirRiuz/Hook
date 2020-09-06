
from flask import Flask
from flask_cors import CORS, cross_origin
import models.users 
import models.ban 
import models.post
import models.followers
import models.rank
import models.notifications
#from models.followers import (follower , initialize_db)


app = Flask(__name__)

#app.config['api'] = '/api/v1/'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SAVE_VIDEOS'] = 'videos/'
app.config['IMAGE_PROFILE'] = 'profileImage/'

def main():
    models.users.initialize_db()
    models.post.initialize_db()
    models.followers.initialize_db()
    models.ban.initialize_db()
    models.notifications.initialize_db()
    models.rank.initialize_db()
    initialize_db()
    app.run(debug=True)

from controllers import *
