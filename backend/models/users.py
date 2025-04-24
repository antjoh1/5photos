from sqlmodel import SQLModel, Field

class UserBase(SQLModel):
    name: str
    age: int
    city: str
    disabled: bool | None = None

class User(UserBase, table = True):
    __tablename__ = "users"
    id: int = Field(None, primary_key = True)
    pass_hash: str 

class UserPublic(SQLModel):
    name: str
    age: int | None
    city: str | None 

class UserLogin(SQLModel):
    name: str 
    password: str

class UserGet(SQLModel):
    name: str

class UserRegister(UserPublic):
    password_raw: str

