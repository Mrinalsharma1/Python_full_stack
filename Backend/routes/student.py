from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
from db_models import StudentDB
from models import Student
from datetime import datetime, date

router = APIRouter()

# DB Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# ✅ Count STUDENT
@router.get("/count")
def get_student_count(db: Session = Depends(get_db)):
    count = db.query(StudentDB).count()
    return {"total_students": count}

# ✅ Count EACH DAYS
@router.get("/today-count")
def get_today_students(db: Session = Depends(get_db)):
    today = date.today()

    count = db.query(StudentDB).filter(
        StudentDB.created_at >= today
    ).count()

    return {"today_students": count}

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

# ✅ GET ALL STUDENTS
@router.get("/")
def get_students(db: Session = Depends(get_db)):
    students = db.query(StudentDB).all()
    return {"data": students}

# ✅ GET SINGLE STUDENT
@router.get("/{student_id}")
def get_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(StudentDB).filter(StudentDB.id == student_id).first()

    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    return {"data": student}


# ✅ UPDATE STUDENT
@router.put("/{student_id}")
def update_student(student_id: int, updated_data: Student, db: Session = Depends(get_db)):
    student = db.query(StudentDB).filter(StudentDB.id == student_id).first()

    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    for key, value in updated_data.dict().items():
        setattr(student, key, value)

    db.commit()
    db.refresh(student)

    return {"message": "Student updated", "data": student}

# ✅ DELETE STUDENT
@router.delete("/{student_id}")
def delete_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(StudentDB).filter(StudentDB.id == student_id).first()

    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    db.delete(student)
    db.commit()

    return {"message": "Student deleted"}

