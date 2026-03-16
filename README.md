# DoConnect – Full Stack Developer Networking Platform

DoConnect is a **full-stack web application** designed to connect developers and enable them to share ideas, collaborate on projects, and interact with a developer community.

The application consists of a **Node.js + Express backend** and a **React + TypeScript frontend built with Vite**.

---

## Features

* User authentication and environment-based configuration
* REST API built with Express.js
* React frontend with modern component architecture
* Context API for state management
* Modular routing and models for backend scalability
* Environment-based configuration using `.env`
* TypeScript support in frontend
* Clean and scalable folder structure

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Context API

### Backend

* Node.js
* Express.js
* MongoDB (via models)
* REST API

### Tools

* npm
* dotenv
* Git & GitHub

---

## Project Structure

```
doconnectproject
│
├── docconnect-backend
│   ├── models
│   ├── routes
│   ├── node_modules
│   ├── .env
│   ├── db.js
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── components
│   ├── pages
│   ├── context
│   ├── node_modules
│   ├── .env.local
│   ├── api.ts
│   ├── App.tsx
│   ├── constants.ts
│   ├── index.html
│   ├── index.tsx
│   ├── metadata.json
│   ├── package.json
│   ├── tsconfig.json
│   ├── types.ts
│   └── vite.config.ts
│
└── README.md
```

---

## Installation

Clone the repository:

```
git clone https://github.com/priyanshsinghgautam/doconnectproject.git
```

Navigate into the project folder:

```
cd doconnectproject
```

---

## Backend Setup

Go to backend folder:

```
cd docconnect-backend
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend server:

```
npm start
```

---

## Frontend Setup

Go to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run the frontend development server:

```
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

## Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Frontend `.env.local`

Example:

```
VITE_API_URL=http://localhost:5000
```

---

## Future Improvements

* User authentication system
* Developer profiles
* Post creation and interaction
* Real-time messaging
* Deployment with Docker / Cloud

---

## Author

**Priyansh Singh Gautam**

B.Tech Student | Java | SQL | Frontend Developer | MERN Stack Enthusiast

GitHub:
https://github.com/priyanshsinghgautam
