from models.images import Image
from sqlmodel import Session


def get_one_image(imgLoc: str, ordinalNum: str, session: Session) -> Image: 
    return "get_one_image() ran"