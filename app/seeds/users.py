import json
from werkzeug.security import generate_password_hash
from app.models import db, User


def seed_users():
    new_users = []
    with open('./app/seeds/users.json') as f:
        data = json.load(f)
        for user in data:
            new_user = User(**user)
            new_users.append(new_user)

    db.session.add_all(new_users)
    db.session.commit()


def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
