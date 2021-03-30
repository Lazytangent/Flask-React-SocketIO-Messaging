from flask import Blueprint, request, session
from flask_login import current_user, login_user, logout_user, login_required
from sqlalchemy import or_

from app.forms import LoginForm, SignUpForm
from app.models import db, User

auth_routes = Blueprint('auth', __name__)


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}

