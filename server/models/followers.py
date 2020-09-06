

import peewee

db = peewee.SqliteDatabase('follower.db')

class follower (peewee.Model):

    #Posteador
    emisorId = peewee.IntegerField()
    reseptorId = peewee.IntegerField(unique=False)
    
    class Meta(object):
        database = db

def initialize_db():
    db.connect()
    db.create_tables([follower], safe = True)
    db.close()


#follower.create_table()
