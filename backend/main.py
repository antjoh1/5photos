import uvicorn

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from web import images
from data import makeDB


app = FastAPI()
app.include_router(images.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your SvelteKit dev URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def hello_world() -> str:
    return "Hello World!"


if __name__ == "__main__": 
    makeDB.create_db_and_tables()
    uvicorn.run("main:app", reload=True)