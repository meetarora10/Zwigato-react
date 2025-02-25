from flask import request, jsonify
from app import app, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from models import User, bcrypt

# Register a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    # Check if email already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "Email already exists"}), 400

    new_user = User(username=data['username'], email=data['email'])
    new_user.set_password(data['password'])  # Hash the password

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully!"}), 201

# Login user
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if user and user.check_password(data['password']):  # Correct password check
        access_token = create_access_token(identity=user.id)
        return jsonify({"message": "Login successful!", "token": access_token}), 200

    return jsonify({"message": "Invalid email or password"}), 401  # Return error if password is incorrect
