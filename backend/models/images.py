from pydantic import BaseModel

class Images(BaseModel):
    id: str
    path: str
    altText: str 