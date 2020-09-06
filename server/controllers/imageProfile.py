

from flask import send_from_directory
from server import app
import os

formats = ('.png' , '.jpeg' , '.jpg')

@app.route('/get/imge/<profileId>')
def getImageProfile(profileId):
    #print(os.path.exists(app.config['IMAGE_PROFILE']+'dafault.png'))
    for itemFormat in range(0 , len(formats)):
        if os.path.exists(app.config['IMAGE_PROFILE']+profileId + formats[itemFormat]):
            return send_from_directory(app.config['IMAGE_PROFILE'] , profileId + formats[itemFormat])
    
    print('No existe en archivo ' , profileId + formats[itemFormat])
    return send_from_directory(app.config['IMAGE_PROFILE'] , 'dafault.png')