# Me-API Playground: A Personal Portfolio API

This project is a full-stack web application that serves as a personal portfolio. It features a React frontend that displays professional information and a FastAPI backend that manages the data in an SQLite database. This project was built as a take-home assessment for the Software & AI Developer internship.

---

## 🚀 Live Demo

* **Live Frontend URL:** [https://me-api-playground-rho-swart.vercel.app/](https://me-api-playground-rho-swart.vercel.app/)
* **Live Backend URL:** [https://me-api-playground-backend-9jod.onrender.com/health](https://me-api-playground-backend-9jod.onrender.com/health)

**Note:** The backend is deployed on a free service and may take 30-60 seconds to "wake up" on the first request.

---

## 🏛️ Architecture

The application is built with a modern, decoupled architecture:

* **Frontend:** A multi-page application built with **React** and styled with CSS. It is deployed on **Vercel**.
* **Backend:** A RESTful API built with **Python** and the **FastAPI** framework. It is deployed on **Render**.
* **Database:** A simple and lightweight **SQLite** database to store and manage portfolio data.

---

## ✨ Features

* **Multi-Page Navigation:** A responsive, multi-page experience using React Router.
* **Dynamic Data:** All project and skill data is fetched live from the backend API.
* **Search Functionality:** The projects page includes a real-time, case-insensitive search to filter projects by technology.
* **RESTful API:** A well-structured backend with endpoints for fetching and searching data.

---

## 🔧 Running Locally

To run this project on your local machine, follow these steps:

### Prerequisites

* Node.js and npm
* Python 3.10+ and pip

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Create and activate a virtual environment:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Seed the database:**
    ```bash
    python seed.py
    ```
5.  **Run the server:**
    ```bash
    uvicorn main:app --reload
    ```
    The backend will be running at `http://127.0.0.1:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory (in a new terminal):**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm start
    ```
    The frontend will open at `http://localhost:3000`.

---

## 📄 Resume

A link to my resume can be found here: https://drive.google.com/file/d/18hm79l2yF6eQoQzfssyXdUf2Wuu1sXkB/view?usp=sharing