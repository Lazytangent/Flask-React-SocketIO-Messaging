from flask import Blueprint

from app.forms import CreateMessage
from app.models import db, Message

message_routes = Blueprint('messages', __name__)


@message_routes.route('/')
def get_messages():
    messages = Message.query.all()
    return {message.id: message.to_dict() for message in messages}


@message_routes.route('/<int:message_id>', methods=["PUT"])
def update_message(message_id):
    message = Message.query.all()



@message_routes.route('/<int:message_id>', methods=['DELETE'])
def delete_message(message_id):
    message = Message.query.get(message_id)
    db.session.delete(message)
    db.session.commit()
    return {'message': f'Deleted message no. {message_id}'}
