import fake.users as data
from models.users import User 

def get_all() -> list[User]: 
    return data.get_all()

def get_one(id:str) -> User:
    return data.get_one(id)

def create(id: str, password: str, email: str) -> User: 
    return data.create_user(id, password, email)

