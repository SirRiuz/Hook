
import datetime
import peewee

db = peewee.SqliteDatabase('users.db')

class user (peewee.Model):
    userName = peewee.CharField(max_length=30)
    lastName = peewee.CharField(max_length=30)
    nickName = peewee.CharField(max_length=50 , default='none' , unique=True)
    email = peewee.CharField(max_length=50 , default='none' , unique=True)
    password = peewee.CharField(max_length=50 , default='none')
    sexo = peewee.CharField(max_length=1 , default='M')
    description = peewee.CharField(max_length=100 , default='Sin descripcion')
    time = peewee.DateTimeField(default=datetime.datetime.now())
    
    class Meta(object):
        database = db

def initialize_db():
    db.connect()
    db.create_tables([user], safe = True)
    db.close()



#user.create_table()