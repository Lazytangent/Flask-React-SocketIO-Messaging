from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email. ValidationError
from app.models import User


def email_exists(form, field):
    email = field.data

