from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List, Optional

import crud
import models
import schema
from database import engine, get_db, SessionLocal
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS Middleware
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/projects/", response_model=List[schema.Project])
def read_projects(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    projects = crud.get_projects(db, skip=skip, limit=limit)
    return projects

@app.get("/projects/search/", response_model=List[schema.Project])
def search_for_projects(query: Optional[str] = None, db: Session = Depends(get_db)):
    if not query:
        return []
    projects = crud.search_projects(db, query=query)
    return projects

@app.get("/skills/", response_model=List[schema.Skill])
def read_skills(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    skills = crud.get_skills(db, skip=skip, limit=limit)
    return skills