from flask import Blueprint

from app.models import db, Message

message_routes = Blueprint('messages', __name__)


@message_routes.route('/')
def get_messages():
    messages = Message.query.all()
    return {message.id: message.to_dict() for message in messages}
