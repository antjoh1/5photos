from pydantic import BaseModel

class Image(BaseModel):
    batch: str
    path: str
    altText: str 
    id: str 
    imgLocation: str
    rating: int

class upvoteImage(BaseModel):
    batch: str
    id: str