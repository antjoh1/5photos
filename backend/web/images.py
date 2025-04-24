from fastapi import APIRouter, Depends, UploadFile, Form
from sqlmodel import Session
from models.images import Image, ImageUpdate
from models.users import User
from crud import images
from data.makeDB import get_session
import auth.users as userAuth

import shutil
import os

from typing import Annotated

sessionDep = Annotated[Session, Depends(get_session)]
authDep = Annotated[User, Depends(userAuth.get_current_active_user)]

router = APIRouter(prefix="/images")

@router.get("/")
def hello_images(word: str | None): 
    return f"Hello Images! - this is {word}"

@router.get("/listBatches")
def get_batch_names_route(session: sessionDep) -> list[str]:
    return images.get_batch_names(session)

@router.get("/{batch}")
def get_image_batch(batch: str, session: sessionDep) -> list[Image]:
    return images.get_image_batch(batch, session)


@router.get("/{imgLoc}/{ordinalNum}")
def get_one_image(imgLoc: str, ordinalNum: str, session: sessionDep) -> Image: 
    return images.get_one_image(imgLoc, ordinalNum, session)

@router.post("/makeImg")
def add_one_image(image: Image, session: sessionDep, authDep: authDep) -> Image: 
    return images.add_one_image(image, session)

@router.patch("/up")
def upvote_image(image: ImageUpdate, session: sessionDep): 
    print(image.model_dump())
    return images.upvote_image(image, session)

@router.patch("/down")
def downvote_image(image: ImageUpdate, session: sessionDep):
    return images.downvote_image(image, session)

@router.delete("/delete")
def delete_image(image: ImageUpdate, session: sessionDep, authDep: authDep):
    return images.delete_image(image, session)

@router.post("/file")
async def upload_file(files: list[UploadFile], token: Annotated[str, Form()], session: sessionDep, authDep: authDep): 
    print("Received files: ", files)
    print("Received form data: ", token)

    response_dict = {}
    token_dict = eval(token)
    print(token_dict)

    target_directory = os.path.join("../static", token_dict["batchName"])
    
    if token_dict["batchName"] not in os.listdir("../static"):
        os.mkdir(target_directory)

    for i, file  in enumerate(files): 
        filename = os.path.join(target_directory,file.filename)
        response_dict.update({f"file{i}": {file.filename}})

        with open(filename, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            buffer.close()
        
        newImage = Image(path=filename, 
                      imgLocation=token_dict[f"photo{i+1}-imgLocation"],
                      ordinalNum= f".{i+1}",
                      altText= token_dict[f"photo{i+1}-altText"])
        
        images.add_one_image(newImage, session)
        
    return response_dict
