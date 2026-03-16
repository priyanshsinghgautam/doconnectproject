# DoConnect – Smart Doctor Search & Appointment Platform

DoConnect is a **full-stack web application** that allows users to **search for doctors and book appointments easily**.
The platform helps patients quickly find the right doctor and manage appointments in a simple and efficient way.

The project is built using a **Node.js + Express backend** and a **React + TypeScript frontend powered by Vite**, with **MongoDB** used as the database.

---

## Features

* 🔎 Search doctors easily
* 📅 Book appointments with doctors
* 🧑‍⚕️ Organized doctor information
* ⚡ Fast and responsive React frontend
* 🔗 REST API based backend
* 📦 Modular backend architecture with models and routes
* 🌐 Environment based configuration

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
* MongoDB
* Mongoose

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
│   ├── seed.js
│   ├── server.js
│   ├── package.json
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

Navigate to the project folder:

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

Run backend server:

```
npm start
```

---

## Frontend Setup

Navigate to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Frontend will run on:

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

* User authentication
* Doctor profile pages
* Appointment history
* Notifications for booked appointments
* Deployment with cloud services

---

## Author

**Priyansh Singh Gautam**
B.Tech Student | Java | SQL | Frontend Developer

GitHub:
https://github.com/priyanshsinghgautam
