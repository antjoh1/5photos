from sqlmodel import SQLModel, Field

class Image(SQLModel):
    path: str
    imgLocation: str
    ordinalNum: str 
    altText: str
    rating: int = 0
    
class Images(Image, table = True): 
    id: int = Field(None, primary_key = True)

class ImageUpdate(Image):
    path: str | None = None 
    imgLocation: str | None = None
    ordinalNum: str | None = None
    altText: str | None = None
    rating: int | None = None 