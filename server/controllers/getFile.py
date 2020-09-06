
from server import app
from flask import request
from models.post import *
from flask import send_from_directory
import os

@app.route('/video/<video>/')
def getFile(video):
    return send_from_directory(app.config['SAVE_VIDEOS'] , video + '.mp4')
