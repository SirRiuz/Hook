

import peewee

db = peewee.SqliteDatabase('rank.db')

class rank(peewee.Model):
    userId = peewee.CharField(max_length=1000 , unique=True)
    ranckName = peewee.CharField(max_length=1000 , default='user')

    class Meta(object):
        database = db

def initialize_db():
    db.connect()
    db.create_tables([rank], safe = True)
    db.close()

#rank.create_table()
#ranks.create(userId='asdasdasdsad').execute()