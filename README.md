# Full Stack Login Application (React + Node.js)

## Project Overview

This project is a simple **Full-Stack Login Application** built using **React (Frontend)** and **Node.js with Express (Backend)**.
The application allows a user to log in using predefined credentials and navigates them to a welcome page upon successful authentication.

It demonstrates:

* Frontend development using **React functional components and Hooks**
* Backend API creation using **Node.js and Express**
* **API integration** between frontend and backend
* Basic **authentication logic**
* Proper **HTTP status code handling**

---

## Technologies Used

### Frontend

* React
* React Router
* Axios
* Vite

### Backend

* Node.js
* Express.js
* CORS

---

## Project Structure

```
OMNITAAS_Task
│
├── backend
│   ├── server.js
│   ├── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   └── Welcome.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## Features

* Login page with **username and password fields**
* Backend **POST /login API** for authentication
* Successful login redirects to **Welcome page**
* Invalid login shows **error message**
* **Username stored in localStorage** after successful login
* **Logout functionality**
* Clean and modular code structure

---

## Login Credentials

```
Username: admin
Password: admin
```

---

## API Endpoint

### POST /login

Validates user credentials.

**Request Body**

```
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response**

```
Status: 200 OK
{
  "message": "Login successful",
  "username": "admin"
}
```

**Failure Response**

```
Status: 401 Unauthorized
{
  "message": "Invalid username or password"
}
```

---

## How to Run the Project

### 1. Clone the repository

```
git clone <repository-url>
```

---

### 2. Install Backend Dependencies

```
cd backend
npm install
```

---

### 3. Start Backend Server

```
node server.js
```

Backend will run on:

```
http://localhost:5000
```

---

### 4. Install Frontend Dependencies

Open a new terminal.

```
cd frontend
npm install
```

---

### 5. Start Frontend

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## Application Flow

1. User enters username and password on the login page.
2. React frontend sends a **POST request to /login**.
3. Backend validates the credentials.
4. If valid, user is redirected to the **Welcome Page**.
5. Username is stored in **localStorage** for future sessions.
6. User can **logout**, which clears the stored username.

---

## Author

**Srinivas**

---

## Notes

This project was developed as part of a **Full-Stack Developer Technical Assessment** to demonstrate basic frontend and backend integration using React and Node.js.
