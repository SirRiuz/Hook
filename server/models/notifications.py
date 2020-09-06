
import peewee

db = peewee.SqliteDatabase('notoficationsDataMachin.db')

class notification (peewee.Model):

    userId = peewee.CharField(max_length=50)
    notificationMode = peewee.CharField(max_length=10)
    notificationMessege = peewee.CharField(max_length=50)
    rediraction = peewee.CharField(max_length=50)
    date = peewee.CharField(max_length=50)

    class Meta(object):
        database = db

def initialize_db():
    db.connect()
    db.create_tables([notification], safe = True)
    db.close()


#notification.create_table()
