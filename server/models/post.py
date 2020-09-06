

import peewee
import datetime

db = peewee.SqliteDatabase('post.db')

class post (peewee.Model):

    idPosteador = peewee.IntegerField()
    messege = peewee.CharField(max_length=10)
    videoMode = peewee.CharField(max_length=10 , default='public')
    datePost = peewee.DateTimeField(default=datetime.datetime.now().strftime('%Y-%m-%d'))
    #videoFormath = peewee.CharField(max_length=10)
    hashtags = peewee.CharField(max_length=100 , default='#default')
    
    class Meta(object):
        database = db

def initialize_db():
    db.connect()
    db.create_tables([post], safe = True)
    db.close()

#post.create_table()
