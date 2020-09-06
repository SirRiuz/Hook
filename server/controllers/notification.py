

from models.notifications import notification
from server import app
from flask import ( request )


def createNotification( userId , mode, messege,rediraction='' ):
    notification.create( userId=userId , notificationMessege=messege , notificationMode=mode , rediraction=rediraction, date='')
    return {
        'notification':{
            'status':'OK',
            'notificationMessege':messege,
            'to':userId,
            'redirect':rediraction,
            'messege':'La notificacion a sido creada !'
        }
    }

#@app.route('/notification/delete/' , methods=['POST'])
def deleteNotification(notificationId):
    notification.delete().where( notification.id ==  notificationId).execute()
    return 'Notificacion eliminada !'

@app.route('/get/notification/' , methods=['POST'])
def displayNotifications():
    userId = request.form.get('userId')
    notificationArray = []
    notifications = notification.select().where( notification.userId == userId ).execute()
    if len(notifications) > 0:
        for notificationItem in range(0,len(notifications)):
            notificationArray.append({
                'notification':{
                    'notificationId':notifications[notificationItem].id,
                    'messege':notifications[notificationItem].notificationMessege,
                    'mode':notifications[notificationItem].notificationMode,
                    'userId':notifications[notificationItem].userId,
                    'rediraction':notifications[notificationItem].rediraction
                }
            })
        
        return {
            'notifications':{
                'notidicationsNumber':len(notificationArray),
                'notificationList':notificationArray
            }
        }

    return 'No hay notificaciones de este usuario'




 