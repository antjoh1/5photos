from fastapi import APIRouter, Depends
from sqlmodel import Session
from models.images import Image, ImageUpdate
from crud import images
from data.makeDB import get_session

from typing import Annotated

sessionDep = Annotated[Session, Depends(get_session)]

router = APIRouter(prefix="/images")

@router.get("/")
def hello_images(word: str | None, session: sessionDep): 
    return f"Hello Images! - this is {word}"


@router.post("/")
def get_one_image(imgLoc: str | None, ordinalNum: str | None, session: sessionDep) -> str: 
    return images.get_one_image(imgLoc, ordinalNum, session)

@router.post("/makeImg")
def add_one_image(image: Image, session: sessionDep) -> Image: 
    return images.add_one_image(image, session)

@router.patch("/up")
def upvote_image(image: ImageUpdate, session: sessionDep): 
    return images.upvote_image(image, session)

@router.patch("/down")
def downvote_image(image: ImageUpdate, session: sessionDep):
    return images.downvote_image(image, session)