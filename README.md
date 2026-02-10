# AI Career Assistant — Full-Stack MERN + Machine Learning Platform

Full-stack AI web application that analyzes resumes, extracts skills, and provides intelligent career insights using Machine Learning and Deep Learning models integrated into a scalable MERN architecture.

This project demonstrates **real-world AI system design** — combining frontend engineering, backend architecture, and production-ready ML services.

---

## Tech Stack

**Frontend**

* React (Vite)
* Axios
* React Router
* Modular component architecture

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* REST API Gateway

**Machine Learning Service**

* Python
* FastAPI
* NLP preprocessing
* ML/DL inference pipeline

**Architecture**

* Microservice-style ML integration
* Service-based backend structure
* Scalable full-stack design

---

## Live Architecture

```
User → React Frontend → Node.js API → Python ML Service → MongoDB
```

Design principles:

* Separation of concerns
* Independent ML service
* Clean API communication
* Production-like folder organization

---

## Key Features

### Full-Stack Functionality

* Resume upload workflow
* Dashboard UI
* API-driven architecture
* Modular frontend structure

### AI / Data Science

* Resume skill extraction (NLP)
* ML-based career insights
* Scalable inference pipeline
* Model training separation

### Engineering Focus

* Clean service layers
* Microservice communication
* Professional repo structure
* Future-ready deployment setup

---

## Project Structure

```
ai-career-assistant/
│
├── client/          # React frontend
├── server/          # Node.js API backend
├── ml-service/      # Python ML microservice
├── docs/            # Architecture + design notes
├── screenshots/     # UI previews
├── infra/           # Docker / deployment configs
└── README.md
```

---

## System Design Overview

This project follows an industry-style architecture where:

* React handles UI & user interaction
* Node.js acts as the API gateway
* Python handles ML inference separately

Why this design?

* Easier scaling of ML workloads
* Clean separation between engineering and data science layers
* Production-ready architecture mindset

---

## Setup Instructions

### Clone Repository

```
git clone <your-repo-url>
cd ai-career-assistant
```

---

### Start Frontend

```
cd client
npm install
npm run dev
```

Runs at:

```
http://localhost:5173
```

---

### Start Backend API

```
cd server
npm install
npm run dev
```

Runs at:

```
http://localhost:5000
```

---

### Start ML Service

```
cd ml-service
python -m venv venv
```

Activate environment:

Windows:

```
venv\Scripts\activate
```

Mac/Linux:

```
source venv/bin/activate
```

Install dependencies:

```
pip install fastapi uvicorn
```

Run server:

```
uvicorn app.main:app --reload --port 8000
```

Runs at:

```
http://localhost:8000
```

---

## API Flow Example

1. User uploads resume from React UI.
2. Request goes to Node.js backend.
3. Node calls ML service via REST API.
4. Python processes resume using ML models.
5. Results return to dashboard.

---

## Screenshots

Add UI previews inside `/screenshots`:

```
screenshots/dashboard.png
screenshots/upload.png
```

---

## Why This Project Stands Out

This repository is built to demonstrate:

* Full-stack engineering skills
* Machine learning integration
* Clean scalable architecture
* Real-world development practices

Many beginner projects combine everything in one server — this project intentionally separates ML into its own service to reflect industry patterns.

---

## Development Roadmap

* Resume NLP pipeline
* Job recommendation system
* Deep learning model integration
* Docker-based deployment
* CI/CD workflows

---

## Author

Dipak Pulami Magar
Aspiring Full-Stack + AI Developer

---

## License

MIT License

