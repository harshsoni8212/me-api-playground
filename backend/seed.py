# backend/seed.py
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Project, Skill, Base


# Create the tables
Base.metadata.create_all(bind=engine)

# Get a database session
db: Session = SessionLocal()

# --- Delete existing data to start fresh ---
db.query(Project).delete()
db.query(Skill).delete()
db.commit()

# --- PROJECTS FROM MY RESUME ---
project1 = Project(
    title="AI-Based Job Shortlisting Platform",
    description="A machine learning-powered job recommendation system using Python and Flask to enhance hiring efficiency and improve job-resume matching accuracy.",
    technologies="Python, Flask, NLP, SQL"
)
project2 = Project(
    title="Voting Management System",
    description="A C-based voting system used in mock elections to enhance voting efficiency, featuring real-time tallying and two-factor authentication.",
    technologies="C"
)

# --- SKILLS FROM MY RESUME ---
skills_list = [
    # Languages
    Skill(name="C++", category="Programming Language"),
    Skill(name="Python", category="Programming Language"),
    Skill(name="C", category="Programming Language"),
    Skill(name="JAVA", category="Programming Language"),
    Skill(name="SQL", category="Database"),
    
    # Frameworks
    Skill(name="HTML and CSS", category="Web Development"),
    Skill(name="NodeJS", category="Web Framework/Library"),
    Skill(name="React", category="Web Framework/Library"),
    
    # Machine Learning and AI
    Skill(name="NLP", category="Machine Learning"),
    Skill(name="LSTM", category="Machine Learning"),
    Skill(name="Neural Networks", category="Machine Learning"),
    Skill(name="Data Preprocessing", category="Machine Learning"),
    
    # Product & Digital Marketing
    Skill(name="SEO", category="Marketing"),
    Skill(name="Social Media Marketing", category="Marketing"),

    # Soft Skills
    Skill(name="Leadership", category="Soft Skill"),
    Skill(name="Project Management", category="Soft Skill"),
    Skill(name="Communication", category="Soft Skill"),
    Skill(name="Collaborative", category="Soft Skill")
]  

# Add all the new objects to the database session
db.add(project1)
db.add(project2)
db.add_all(skills_list)

# Commit the changes to the database
db.commit()

# Close the session
db.close()

print("Database has been seeded with data from your resume! 🌱")