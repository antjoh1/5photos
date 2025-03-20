from models.users import User 

_users = [
    User(id = "user1", password = "password", email = "mail@mail.com"),
    User(id = "user2", password = "pa$$word", email = "myMail@gmail.com"),
    User(id = "user3", password = "someWord", email = "some.mail@gmail.com")
]

def get_all() -> list[User]:
    return _users

def get_one(id: str) -> User | None: 
    for user in _users: 
        if id == user.id:
            return user
        
    return None 

def create_user(id: str, password: str, email: str) -> User: 
    newUser = User(id = id, password = password, email = email)
    _users.append(newUser)

    return newUser

