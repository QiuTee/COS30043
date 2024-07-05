from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import pymysql
import mysql.connector
from create_db import create_database
pymysql.install_as_MySQLdb()



app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/unit'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
app.app_context().push()

class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(80), nullable=True)
    description = db.Column(db.String(255), nullable=True)
    cp = db.Column(db.Float, nullable=True)
    tp = db.Column(db.String(255), nullable=True)
    
    def __repr__(self) -> str:
        return f'Code: {self.code}'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80) , nullable=False)
    password = db.Column(db.String(80) , nullable= False)

    def __repr__(self) -> str:
        return f'Username: {self.username}'

def create_user():
    check_user = User.query.count() 
    if check_user == 0:
        user = User(username = 'admin' , password = 'admin')
        db.session.add(user)
        db.session.commit()

def init_db():
    with app.app_context():
        db.create_all()
        create_user()

@app.route('/units', methods=['GET', 'POST'])
def createItem():
    if request.method == 'POST':
        data = request.get_json()
        check_unit = Unit.query.filter_by(code = data['code']).first()
        if not check_unit : 
            new_unit = Unit(code=data['code'],
                            description=data['desc'], 
                            cp=data['cp'],
                            tp=data['type'])
            db.session.add(new_unit)
            db.session.commit()
            return jsonify({'response': 'Unit added successfully!', 
                            'status': 201})
        else : 
            return jsonify({'response': 'Unit exist!!!', 
                            'status': 400})
    else : 
        return_unit = []
        units = Unit.query.all()
        for unit in units :
            return_unit.append({
                        'code' : unit.code ,
                        'desc' : unit.description ,
                        'cp' : unit.cp, 
                        'type' : unit.tp
                        })
       
        return jsonify(return_unit), 200


@app.route('/update' , methods=['PUT'])
def update_unit() : 
    if request.method == 'PUT' : 
        data = request.get_json()
        unit_to_update = Unit.query.filter_by(code = data['code']).first()
        if unit_to_update : 
            unit_to_update.description = data['desc']
            unit_to_update.cp = data['cp']
            unit_to_update.tp = data['type']
            try : 
                db.session.commit()
                return jsonify({'response': 'Unit update successfully!', 
                            'status':201})
            except:
                return 'Problem in update data '
        else  :
            return jsonify({'response': 'Unit not exist !!!', 
                            'status': 400})

@app.route('/delete' , methods=['DELETE'])
def delete_unit():
    if request.method == 'DELETE':
        data = request.get_json()
        unit_to_delete = Unit.query.filter_by(code = data['code']).first()
        if unit_to_delete : 
            db.session.delete(unit_to_delete)
            db.session.commit()
            return jsonify({'response': 'Unit delete successfully!', 
                            'status': 201}), 200
        else :
            return jsonify({'response': 'Unit not exists' , 
                           'status' : 404}), 200
        
@app.route('/login', methods=['POST'])
def user_login():
    if request.method == 'POST':
        data = request.get_json()
        user = User.query.filter_by(username=data['username']).first()
        if user and user.password == data['password']:
            return jsonify({
                'response': 'Login successful',
                'status': 200
            }) , 201
        return jsonify({'response': 'Invalid credentials', 
                        'status' : 404
                        }), 404


if __name__ == "__main__":
    create_database()
    init_db()  
    app.run(debug=True)
