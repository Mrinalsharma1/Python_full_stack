from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database import Base

class StudentDB(Base):
    __tablename__ = "students"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(100))
    course = Column(String(100))
    gender = Column(String(100))
    address = Column(Text)

    created_at = Column(DateTime, default=datetime.utcnow)  # ✅ NEW