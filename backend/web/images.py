from fastapi import APIRouter, Depends
from sqlmodel import SQLModel, Session
from models.images import Image 
from data.makeDB import get_session

from typing import Annotated

sessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(prefix="/images")

@router.get("/")
def hello_images(word: str | None, session: sessionDep): 
    return f"Hello Images! - this is {word}"


@router.post("/")
def get_one_image(imgLoc: str, ordinalNum: str, session: sessionDep) -> Image: 
    return "This post request triggered - get_one_image"