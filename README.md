# 🧩 IA03 – User Registration System

A fullstack web application that allows users to **register and log in** with validation and responsive UI.

## 📚 Overview

This project implements a **User Registration System** using:

- **Backend:** [NestJS](https://nestjs.com/) + MongoDB (Mongoose)
- **Frontend:** [React + Vite](https://vitejs.dev/) + Tailwind CSS + React Query + React Hook Form
- **Purpose:** Demonstrate REST API integration, form validation, and basic authentication workflow (registration).

---

## 🏗️ Project Structure

```
ia03-user-registration/
├── backend/      # NestJS API (User registration endpoint)
└── frontend/     # React app (UI for Register & Login)
```

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/mandeotv1234/ia03-user-registration.git
cd ia03-user-registration
```

---

## 🧠 Backend Setup (NestJS)

### 1. Go to backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables  
Create a `.env` file in `/backend` with the following content:
```
MONGODB_URI=mongodb://localhost:27017/ia03-users
PORT=3000
```

### 4. Run the server
```bash
npm run start
```

The backend will start at  
👉 **http://localhost:3000**

---

## 💻 Frontend Setup (React + Vite)

### 1. Go to frontend folder
```bash
cd ../frontend
```

### 2. Install dependencies
```bash
npm install
```
### 3. Configure environment variables
Create a `.env` file in `/frontend` with the following content:
```
VITE_API_URL=http://localhost:3000
```


### 4. Start development server
```bash
npm run dev
```

The frontend will start at  
👉 **http://localhost:5173**

---

## 🔗 API Integration

The frontend communicates with backend via:
```
POST http://localhost:3000/user/register
```

**Example Request:**
```json
{
  "email": "test@example.com",
  "password": "Vl123456*"
}
```

**Example Response:**
```json
{
  "message": "User registered successfully"
}
```

---

## 🧩 Pages Implemented

| Page      | Description                              |
|------------|------------------------------------------|
| `/`        | Home page                               |
| `/login`   | Login UI (mock only)                    |
| `/signup`  | Register form integrated with API       |

---

## 🌐 Deployment

Both backend and frontend can be deployed using:
- **Render**, **Vercel**, or **Netlify** for frontend
- **Render** or **Railway** for backend

---

## 👨‍💻 Author

**Your Name**  
Software Engineering Student – University of Science, VNUHCM  
📧 22120201@student.hcmus.edu.vn  

---

## 🏁 License

This project is created for educational purposes as part of the **IA03 – User Registration API with React Frontend** assignment.
