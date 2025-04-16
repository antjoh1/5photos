from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from models.users import UserPublic, UserBase, UserGet
from typing import List, Annotated
from sqlmodel import Session
from data.makeDB import get_session
from crud import users

router = APIRouter(prefix = "/users")

sessionDep = Annotated[ Session, Depends(get_session) ]
oAuth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# async def get_current_user(token: Annotated[str, Depends(oAuth2_scheme)]):
#     user = fake_decode_token(token)
#     return user

@router.get("/", response_model=List[UserPublic])
def get_user_list(session: sessionDep):
    return users.get_all_users(session)

@router.get("/{username}")
def get_particular_user(username: str, session: sessionDep) -> UserPublic:\
    return users.get_user(UserGet(name=username), session)

@router.post("/makeUser", response_model=UserPublic)
def add_user(user: UserBase, session: sessionDep) -> UserPublic:
    return users.create_user(user, session)

@router.delete("/deleteUser")
def delete_user(user: UserBase, session: sessionDep) -> str:
    return users.delete_user(user, session)

@router.get("/auth")
async def read_items(token: Annotated[str, Depends(oAuth2_scheme)]):
    return { "token": token }

@router.get("/me")
async def read_users_me(current_user: Annotated[UserBase, Depends(get_current_user)]):
    return current_user