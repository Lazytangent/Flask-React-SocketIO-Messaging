from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    sent_messages = db.relationship('Message',
                                    foreign_keys="messages.sender_id",
                                    back_populates="sender")
    received_messages = db.relationship('Message',
                                        foreign_keys="messages.recipient_id",
                                        back_populates="recipient")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "sent_messages": {
                message.id: message.to_simple_dict()
                for message in self.sent_messages
            },
            "received_messages": {
                message.id: message.to_simple_dict()
                for message in self.received_messages
            },
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
        }
