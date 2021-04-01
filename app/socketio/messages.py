from flask_socketio import emit

from app.models import db, Message
from .socketio import socketio


@socketio.on('message')
def handle_message(data):
    message = Message(**data)
    db.session.add(message)
    db.session.commit()

    emit('message', message)
