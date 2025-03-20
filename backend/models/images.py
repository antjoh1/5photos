from pydantic import BaseModel

class Image(BaseModel):
    id: str
    path: str
    altText: str 
    imgDescription: str 
    imgLocation: str