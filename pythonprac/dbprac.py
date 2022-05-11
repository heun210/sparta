from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# insert /find / update / delete

doc = {'name':'bobby','age':21}
db.users.insert_one(doc)