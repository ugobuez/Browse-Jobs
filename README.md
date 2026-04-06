# Browse-Jobs
# 🧑‍💻 Job Feed with Server-Side Filtering

A full-stack job browsing application built with **NestJS (Backend)** and **React + TypeScript (Frontend)**.

This project demonstrates clean architecture, server-side filtering, pagination, and URL-synchronized state — built as part of a technical assessment.

---

## 🚀 Features

### ✅ Backend (NestJS)
- REST API: `GET /jobs`
- Server-side filtering:
  - Category (Engineering, Design)
  - Type (Full-time, Contract)
- Pagination support
- Structured response with metadata
- Mock in-memory data (production-ready structure)

### ✅ Frontend (React + Vite + TypeScript)
- Browse jobs page
- Sidebar filters
- Pagination
- URL synchronization (`/jobs?category=...&type=...&page=...`)
- Loading, error, and empty states
- Responsive design
- Reset filters functionality
- Apply job modal (bonus feature)

---

## 🏗️ Tech Stack

**Frontend**
- React
- TypeScript
- Vite
- React Router

**Backend**
- NestJS
- TypeScript

---

## 📁 Project Structure

backend/
├── jobs/
├── dto/
├── services/
├── controllers/

frontend/
├── pages/
├── components/
├── hooks/
├── types/


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ugobuez/Browse-Jobs.git
cd Browse-Jobs

2️⃣ Backend Setup
cd backend
npm install
npm run start:dev

http://localhost:3000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev

http://localhost:5173

🔗 API Endpoint
GET /jobs

Query Parameters:

Param	Type	Description
page	number	Page number (default: 1)
limit	number	Items per page
category	string	Job category
type	string	Job type

📦 Example Response
{
  "data": [
    {
      "id": 1,
      "title": "Frontend Dev",
      "category": "Engineering",
      "type": "Full-time"
    }
  ],
  "meta": {
    "total": 30,
    "page": 1,
    "limit": 5,
    "totalPages": 6
  }
}

