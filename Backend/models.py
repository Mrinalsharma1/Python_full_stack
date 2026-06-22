from pydantic import BaseModel

class Student(BaseModel):
    name: str
    email: str
    phone: str
    course: str
    gender: str
    address: str

    class Config:
        orm_mode = True