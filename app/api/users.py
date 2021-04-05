from flask import Blueprint, request
from sqlalchemy import or_

from app.models import User, Message

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def get_users():
    users = User.query.all()
    return {user.id: user.to_dict() for user in users}


@user_routes.route('/<int:user_id>')
def get_user(user_id):
    user = User.query.get(user_id)
    return user.to_dict()


@user_routes.route('/<int:user_id>/messages')
def get_users_messages(user_id):
    messages = Message.query.filter(
        or_(Message.sender_id == user_id,
            Message.recipient_id == user_id)).all()
    return {message.id: message.to_dict() for message in messages}


@user_routes.route('/<int:user_id>/messages/<int:other_user_id>')
def get_conversation(user_id, other_user_id):
    messages_from_user = Message.query.filter(
        Message.sender_id == user_id,
        Message.receiver_id == other_user_id).all()
    messages_to_user = Message.query.filter(
        Message.sender_id == other_user_id,
        Message.recipient_id == user_id).all()
    messages = messages_to_user + messages_from_user
    return {message.id: message.to_dict() for message in messages}
