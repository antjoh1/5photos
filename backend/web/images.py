from fastapi import APIRouter, Form
import service.images as service 
from models.images import Image, upvoteImage
from typing import Annotated

router = APIRouter(prefix="/images")

@router.get("/")
def get_all_images() -> list[Image]:
    return service.get_all_images()

@router.get("/{batch}")
def get_image_batch(batch: str) -> list[Image]:
    return service.get_image_batch(batch)

@router.get("/{batch}/{img}")
def get_single_image(batch: str, img: str) -> Image: 
    return service.get_one_image(batch, img)

@router.post("/")
def upvote_image(request: upvoteImage) -> Image:
    return service.upvote_image(request.batch, request.id)