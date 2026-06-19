from fastapi import FastAPI
from database import engine
from db_models import Base
from routes.student import router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(router, prefix="/student")

app.add_middleware(
    CORSMiddleware,
    allow_origin=["*"],
    allow_credential=True,
    allow_methods=["*"],
    allow_header=["*"],
)