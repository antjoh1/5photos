from fastapi import FastAPI, File
from fastapi.middleware.cors import CORSMiddleware
from web import users

app = FastAPI()
app.include_router(users.router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/small")
async def upload_small_file(small_file: bytes=File()) -> str:
    return f"file_size: {len(small_file)}"
