from models.images import Images

from sqlmodel import SQLModel, Session, create_engine

sqlite_file_name = "database.db"
sqlite_address = f"sqlite:///{sqlite_file_name}"
connect_args = { "check_same_thread": False }

engine = create_engine(sqlite_address, echo=True, connect_args=connect_args)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session

if __name__ == "__main__":
    create_db_and_tables()