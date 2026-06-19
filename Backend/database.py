from sqlalchemy import create_engine
from sqlalchemy import sessionmaker, declerative_base

DATABASE_URL = "mysql+pymysql://root:password@localhost/student_db"

engine = create_engine(DATABASE_URL)

sessionLocal = sessionmaker(bind = engine)

Base = declerative_base()