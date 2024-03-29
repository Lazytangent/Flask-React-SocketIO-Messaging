from datetime import datetime
from .db import db


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    sender_id = db.Column(db.Integer,
                          db.ForeignKey('users.id'),
                          nullable=False)
    recipient_id = db.Column(db.Integer,
                             db.ForeignKey('users.id'),
                             nullable=False)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime,
                           nullable=False,
                           default=datetime.utcnow)
    updated_at = db.Column(db.DateTime,
                           nullable=False,
                           default=datetime.utcnow)

    sender = db.relationship('User',
                             foreign_keys=[sender_id],
                             back_populates="sent_messages")
    recipient = db.relationship('User',
                                foreign_keys=[recipient_id],
                                back_populates="received_messages")

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "sender": self.sender.to_simple_dict(),
            "recipient": self.recipient.to_simple_dict(),
            "created_at": str(self.created_at),
        }

    def to_simple_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "sender": self.sender.username,
            "recipient": self.recipient.username,
            "created_at": str(self.created_at),
        }
