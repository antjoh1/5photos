from sqlmodel import Session, SQLModel
from models.users import UserGet, User
from crud import users
from data import makeDB
from fastapi.security import OAuth2PasswordBearer
from fastapi import HTTPException, status, Depends

import jwt
from jwt.exceptions import InvalidTokenError
from passlib.context import CryptContext
from typing import Annotated
from datetime import datetime, timedelta, timezone

import bcrypt
if not hasattr(bcrypt, '__about__'):
    bcrypt.__about__ = type('about', (object,), {'__version__': bcrypt.__version__})


from dotenv import load_dotenv
import os 
load_dotenv(dotenv_path="../../.env")

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
EXPIRE_TOKEN_TIME = os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")

oAuth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/token")
pwd_context = CryptContext(schemes=['bcrypt'], deprecated="auto")

class Token(SQLModel):
    access_token: str
    token_type: str

class TokenData(SQLModel):
    username: str | None = None

def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now() + expires_delta
    else: 
        expire = datetime.now() + timedelta(minutes=15)

    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt
    

def hash_password(password: str) -> str:
    return pwd_context.hash(password) 

def verify_password(pass_plain: str, pass_hash: str):
    return pwd_context.verify(pass_plain, pass_hash)

def authenticate_user(username: str, plain_password: str, session: Session): 
    user = users.get_user(username, session)
    if not user:
        return False
    if not verify_password(plain_password, user.pass_hash):
        return False 
    
    return user 

async def get_current_user(token: Annotated[str, Depends(oAuth2_scheme)], session: Annotated[Session, Depends(makeDB.get_session)]):
    credentialsException = HTTPException(
        status_code = status.HTTP_401_UNAUTHORIZED,
        detail = "Could not validate credentials!",
        headers = {"WWW-authenticate": "Bearer"})
    
    try:
        print(f"started get_current_user,{ALGORITHM}, {SECRET_KEY},")
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None: 
            raise credentialsException
        token_data = TokenData(username=username)

    except InvalidTokenError: 
        raise credentialsException
    
    user = users.get_user(username, session)

    if user is None: 
        raise credentialsException
         
    return user

async def get_current_active_user(current_user: Annotated[User, Depends(get_current_user)]): 
    if current_user.disabled: 
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail = "User Inactive",
        )
    
    return current_user

