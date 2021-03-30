from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import InputRequired


class CreateMessage(FlaskForm):
    sender_id = IntegerField(validators=[InputRequired()])
    recipient_id = IntegerField(validators=[InputRequired()])
    body = TextAreaField(validators=[InputRequired()])
