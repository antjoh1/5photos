from models.images import Image, Images
from sqlmodel import Session

def get_one_image(imgLoc: str | None, ordinalNum: str | None, session: Session) -> str: 
    return f"get_one_image() ran, {imgLoc}, {ordinalNum}" 


def add_one_image(image: Image, session: Session) -> Image:
    newEntry = Images(path=image.path, ordinalNum=image.ordinalNum, imgLocation=image.imgLocation, altText=image.altText)

    print(image.model_dump())
    session.add(newEntry)
    session.commit()
    session.refresh(newEntry)
    return image