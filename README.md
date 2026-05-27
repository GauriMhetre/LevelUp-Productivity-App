# 🚀 LevelUp – Gamified Student Productivity Platform

LevelUp is a full-stack productivity platform designed to make studying and task management more engaging through gamification. Users can manage tasks, earn XP, maintain streaks, unlock achievements, use focus mode, and track productivity through analytics.

---

## 🌟 Features

### 🔐 Authentication

* User Signup/Login
* JWT Authentication
* Protected Routes
* Password encryption using bcrypt

### 📝 Task Management

* Add Tasks
* Complete Tasks
* Delete Tasks
* MongoDB task storage
* Persistent user data

### 🎮 Gamification

* XP reward system
* Level progression
* Daily streak tracking
* Achievement badges
* Focus rewards

### 📊 Analytics Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Productivity insights
* Dynamic charts using Recharts

### ⏱ Productivity Features

* Pomodoro Focus Mode
* Session tracking
* XP rewards after focus completion

### 🎨 User Experience

* Responsive design
* Toast notifications
* Dark theme UI
* Interactive dashboard

---

## 🛠 Tech Stack

**Frontend**

* React
* Tailwind CSS
* React Router
* React Toastify
* Recharts

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas

**Authentication**

* JWT
* bcrypt

---

## 🏗 Architecture

```txt
User
   ↓
React Frontend
   ↓
Express REST API
   ↓
MongoDB Atlas
```

---

## 📂 Project Structure

```txt
LevelUp
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── services/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
```

---

## ⚙️ Installation

Clone repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend:

```bash
cd server
npm install
npm run dev
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```


---

## 📚 Key Learnings

* REST API development
* JWT authentication
* MongoDB integration
* State management in React
* CRUD operations
* Frontend–backend integration
* Responsive UI design

---

## 🚀 Future Improvements

* AI productivity recommendations
* Calendar integration
* Email notifications
* Leaderboards

---

## 👨‍💻 Developed By

Gauri
