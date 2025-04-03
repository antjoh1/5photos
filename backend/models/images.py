from sqlmodel import SQLModel, Field

class Image(SQLModel):
    path: str
    imgLocation: str
    ordinalNum: str
    altText: str
    
class Images(Image, table = True): 
    id: int = Field(None, primary_key=True)


