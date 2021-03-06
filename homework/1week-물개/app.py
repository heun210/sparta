from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbhomework


## HTML 화면 보여주기
@app.route('/')
def homework():
    return render_template('index.html')


# 주문하기(POST) API
@app.route('/order', methods=['POST'])
def save_order():
    name_receive = request.form['name_give']
    num_receive = request.form['num_give']
    add_receive = request.form['add_give']
    call_receive = request.form['call_give']
    doc = {
        'name' : name_receive,
        'num': num_receive,
        'add' : add_receive,
        'call' : call_receive,
    }
    db.orderlist.insert_one(doc)
    return jsonify({'msg': '주문완료!'})


# 주문 목록보기(Read) API
@app.route('/order', methods=['GET'])
def view_orders():
    orders = list(db.orderlist.find({}, {'_id':False}))
    return jsonify({'result': 'success', 'all_orders':orders})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)