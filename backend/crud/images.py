from models.images import Image, Images, ImageUpdate
from sqlmodel import Session, select
from fastapi import HTTPException

def get_one_image(imgLoc: str | None, ordinalNum: str | None, session: Session) -> str: 
    return f"get_one_image() ran, {imgLoc}, {ordinalNum}" 


def add_one_image(image: Image, session: Session) -> Image:
    newEntry = Images(path=image.path, ordinalNum=image.ordinalNum, imgLocation=image.imgLocation, altText=image.altText, rating=image.rating)

    print(image.model_dump())
    session.add(newEntry)
    session.commit()
    session.refresh(newEntry)
    return image

def upvote_image(image: ImageUpdate, session: Session) -> Image: 
    statement  = select(Images).where(Images.imgLocation == image.imgLocation).where(Images.ordinalNum == image.ordinalNum)
    result = session.exec(statement)
    selectedImage = result.one()
    
    print(selectedImage)

    if not selectedImage:
        raise HTTPException(status_code=404, detail="Image not found!")
    
    selectedImage.rating += 1

    session.add(selectedImage)
    session.commit()
    session.refresh(selectedImage)

    return selectedImage

def downvote_image(image: ImageUpdate, session: Session) -> Image:
    statement  = select(Images).where(Images.imgLocation == image.imgLocation).where(Images.ordinalNum == image.ordinalNum)
    result = session.exec(statement) 
    selectedImage = result.one() 

    if not selectedImage:
        raise HTTPException(status_code=404, detail="Image not found!")

    print(selectedImage) 

    selectedImage.rating -= 1 # Reduce rating by 1

    session.add(selectedImage)
    session.commit()
    session.refresh(selectedImage)

    return selectedImage
