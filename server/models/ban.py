

import peewee
import datetime

db = peewee.SqliteDatabase('ban.db')

class ban (peewee.Model):

    banId = peewee.CharField(max_length=100 , primary_key=True , unique=True)
    userBaned = peewee.CharField(max_length=100 , unique=True)
    tempBan = peewee.CharField(max_length=20)
    motive = peewee.CharField(max_length=200)

    class Meta(object):
        database = db

def initialize_db():
    db.connect()
    db.create_tables([ban], safe = True)
    db.close()


#ban.create_table()
