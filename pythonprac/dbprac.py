from pymongo import MongoClient # pymongo를 임포트 하기
client = MongoClient('localhost', 27017) # pymongo를 임포트 하기
db = client.dbsparta # 'dbsparta'라는 이름의 db를 만듭니다.


# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
same_ages = list(db.users.find({'age':21},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})