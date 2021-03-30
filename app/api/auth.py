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
    return {'errors': ['Unauthorized']}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in.
    """
    form = LoginForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        credential = form.data['credential']
        user = User.query.filter(
            or_(User.email == credential,
                User.username == credential)).first()
        login_user(user)
        return user.to_dict()
    return {'errors': form.errors}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out.
    """
    logout_user()
    return {'message': 'User logged out.'}


@auth_routes.route('/signup', methods=["POST"])
def sign_up():
    """
    Creates a new user and logs them in.
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': form.errors}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails.
    """
    return {'errors': ['Unauthorized']}, 401
