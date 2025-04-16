from models.users import UserBase, UserPublic, User, UserGet, UserLogin
from sqlmodel import SQLModel, Session, select
from fastapi import HTTPException

from typing import List


def get_all_users(session: Session) -> List[UserPublic]:
    statement = select(User)
    result = session.exec(statement)

    userList = []
    for user in result:
        userList.append(user)

    return userList

def create_user(user: UserBase, session:Session) -> UserPublic: 
    newEntry = User(name = user.name, password = user.password, age = user.age, city = user.city)

    session.add(newEntry)
    session.commit() 
    session.refresh(newEntry)

    return newEntry # fastAPI should figure out that response_model is UserPublic

def delete_user(user: UserBase, session: Session) -> str: 
    statement = select(User).where(User.name == user.name).where(User.password == user.password)
    result = session.exec(statement)

    count = len(result.all())

    for user in result:
        session.delete(user)
        session.commit()
    
    return f"Succesfully deleted {count} user(s)"

def get_user(user: UserGet, session: Session) -> User:
    statement = select(User).where(User.name == user.name)
    result = session.exec(statement)

    return result.all()[0]
