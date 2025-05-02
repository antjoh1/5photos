from fastapi import APIRouter, Depends, HTTPException, status 
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from models.users import UserPublic, UserBase, UserGet, User, UserRegister
from typing import List, Annotated
from sqlmodel import Session
from data.makeDB import get_session
from crud import users
from auth import users as userAuth

import os 
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone

load_dotenv(dotenv_path=".env")
EXPIRATION_TIME_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

router = APIRouter(prefix = "/users")

sessionDep = Annotated[ Session, Depends(get_session) ]
authDep = Annotated[ User, Depends(userAuth.get_current_active_user) ]

@router.get("/", response_model=List[UserPublic])
def get_user_list(session: sessionDep, auth: authDep):
    return users.get_all_users(session)

@router.post("/makeUser", response_model=UserPublic)
def add_user(user: UserRegister, session: sessionDep) -> UserPublic:
    return users.create_user(user, session)

@router.delete("/deleteUser")
def delete_user(user: UserBase, session: sessionDep) -> str:
    return users.delete_user(user, session)

@router.post("/token")
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], session: sessionDep) -> userAuth.Token:
    user = userAuth.authenticate_user(form_data.username, form_data.password, session)

    if not user: 
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="incorrect username/password")
    
    print("Success authentication for user: ", user)

    access_token_expires = timedelta(minutes=EXPIRATION_TIME_MINUTES)
    # access_token = userAuth.create_access_token(data = {"sub":user.name}, expires_delta=access_token_expires)
    access_token = userAuth.create_access_token(data = {"sub":user.name})

    return userAuth.Token(access_token=access_token, token_type="bearer")

@router.get("/me")
async def read_users_me(current_user: Annotated[User, Depends(userAuth.get_current_active_user)]):
    return current_user

@router.get("/getUser/{username}")
def get_particular_user(
    username: str, 
    current_user: Annotated[User, Depends(userAuth.get_current_active_user)], 
    session: sessionDep) -> str:
    
    target_user = users.get_user(username, session)
    msg = f"user {current_user.name} is looking for {target_user.name}"
    
    return msg

@router.get("/me/items/")
async def read_own_items(current_user: Annotated[User, Depends(userAuth.get_current_active_user)]):
    return [{"item_id": "Foo", "owner": current_user.name}]