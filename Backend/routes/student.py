from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from db_models import StudentDB
from models import Student

router = APIRouter()

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ CREATE STUDENT API
@router.post("/")
def create_student(student: Student, db: Session = Depends(get_db)):
    
    new_student = StudentDB(**student.dict())

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Student created successfully",
        "data": new_student
    }