from flask_socketio import emit
from .socketio import socketio


@socketio.on('message')
def handle_message(data):
    print(data)
    emit('message', data)
