from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.fields.html5 import EmailField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def email_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User with this email exists.")


def username_exists(form, field):
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError("User with this username exists.")


def passwords_match(form, field):
    password = field.data
    confirmed_password = form.data['confirmed_password']
    if password != confirmed_password:
        raise ValidationError("Passwords need to match.")


class SignUpForm(FlaskForm):
    username = StringField(validators=[DataRequired(), username_exists])
    email = EmailField(validators=[DataRequired(), Email(), email_exists])
    password = PasswordField(validators=[DataRequired()])
    confirmed_password = PasswordField(validators=[])
