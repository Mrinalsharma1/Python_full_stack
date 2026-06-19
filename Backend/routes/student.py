from sqlalchemy.orm import Session
from fastapi import Depends
from database import sessionLocal

def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()

# Create Student API

@router.post("/")
def create_student(student:Student,db:Session = Depends(get_db)):
    new_studnet = StudentDB(**student.dict())
    db.add(new_studnet)
    db.commit()
    db.refresh(new_studnet)
    
    return {"message": "Student added", "data": new_studnet}