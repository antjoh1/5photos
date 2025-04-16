from sqlmodel import SQLModel, Field

class UserBase(SQLModel):
    name: str
    password: str
    age: int
    city: str

class User(UserBase, table = True):
    __tablename__ = "users"
    id: int = Field(None, primary_key = True)

class UserPublic(SQLModel):
    name: str
    age: int | None
    city: str | None 

class UserLogin(SQLModel):
    name: str 
    password: str

class UserGet(SQLModel):
    name: str