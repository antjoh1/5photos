import uvicorn

from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from web import users, images
from data import makeDB

tags_metadata = [
    {
        "name": "images",
        "description": "operations on images"
    },
    {
        "name": "users",
        "description": "operation on users including registration and login"
    }
]

app = FastAPI(openapi_tags = tags_metadata)
app.include_router(images.router, tags=["images"])
app.include_router(users.router, tags=["users"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:4173","http://0.0.0.0:3000"],  # your SvelteKit dev URL
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