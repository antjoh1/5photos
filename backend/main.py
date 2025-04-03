import uvicorn

from fastapi import FastAPI, APIRouter
from web import images

app = FastAPI()
app.include_router(images.router)

@app.get("/")
def hello_world() -> str:
    return "Hello World!"


if __name__ == "__main__": 
    uvicorn.run("main:app", reload=True)