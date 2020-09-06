
from server import app
from flask import request
import os

@app.route('/upload/' , methods=['POST'])
def uploadVideo ():
    file = ''
    if request.method == 'POST':

        try:
            file = request.files['file']
            file.save(os.path.join(app.config['SAVE_VIDEOS'], file.filename))
            return{
                'file':{
                    'satus':'ok',
                    'saveDir':os.path.join(app.config['SAVE_VIDEOS'], file.filename)
                }
            }
        except:
            return {
                'error':{
                    'type':'UPLOAD_ERROR',
                    'messege':'A ocurrido un error al subier el archivo ...'
                }
            }
