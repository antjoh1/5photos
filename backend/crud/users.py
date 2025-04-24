from models.users import UserBase, UserRegister,  UserPublic, User, UserGet, UserLogin
from sqlmodel import SQLModel, Session, select
from fastapi import HTTPException, status
from auth.users import hash_password

from typing import List


def get_all_users(session: Session) -> List[UserPublic]:
    statement = select(User)
    result = session.exec(statement)

    userList = []
    for user in result:
        userList.append(user)

    return userList

def create_user(user: UserRegister, session:Session) -> UserPublic: 
    newEntry = User(name = user.name, pass_hash = hash_password(user.password_raw), age = user.age, city = user.city, disabled=False)

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

def get_user(user: str, session: Session) -> User:
    statement = select(User).where(User.name == user)
    result = session.exec(statement)
      
    selected_user = result.all()
    
    print("this is in get_user", selected_user)

    try:
        return selected_user[0]
    except:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"username doesn't exist {user}")
