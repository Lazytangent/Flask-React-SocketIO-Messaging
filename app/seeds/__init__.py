from flask.cli import AppGroup

seed_commands = AppGroup('seed')


@seed_commands.command('all')
def seed():
    pass


@seed_commands.command('undo')
def undo():
    pass
