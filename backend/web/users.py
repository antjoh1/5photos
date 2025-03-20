from fastapi import APIRouter
from models.users import User
import service.users as service


router = APIRouter(prefix = "/users")

@router.get("/{id}")
def get_one_user(id: str) -> User:
    return service.get_one(id)

@router.get("/")
def get_all_users():
    return service.get_all()

@router.post("/")
def create_user(id: str, password: str, email: str) -> User:
    return service.create(id, password, email)