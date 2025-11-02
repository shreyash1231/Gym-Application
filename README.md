# 🏋️‍♂️ GymMate – Full Stack Gym Management Application

## 📘 Overview
**GymMate** is a full-stack gym management system developed to simplify daily operations for gym administrators.  
It allows multiple users to securely log in, manage memberships, get consumer data with filters, and monitor member data — all in one place.

This application is built using **Spring Boot** (backend) and **ReactJS** (frontend), with **MySQL** as the database.

---

## 🚀 Features
- 🔐 **JWT-Based Authentication** – Secure login and signup for multiple user roles.  
- 👥 **Role-Based Access Control** – Separate dashboards and permissions for admins, trainers, and customers.  
- 📦 **RESTful APIs** – Backend built with clean, modular API endpoints.  
- 💳 **Payment Tracking** – Easily view and manage membership payments.  
- ⏳ **Membership Expiration Monitoring** – Automatically highlight or alert expired memberships.  
- 🗄️ **MySQL Integration** – Efficient storage and retrieval of all customer, membership, and payment records.  
- 🌐 **Full-Stack Integration** – Smooth interaction between ReactJS frontend and Spring Boot backend.  

---

## 🧩 Tech Stack

| Component        | Technology Used |
|------------------|-----------------|
| **Frontend**     | ReactJS |
| **Backend**      | Spring Boot |
| **Database**     | MySQL |
| **Authentication** | JWT (JSON Web Token) |
| **Build Tool**   | Maven |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation and Setup

### 🔧 Backend (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/shreyash1231/Gym-Application.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd GymMate/gymmate
   ```
3. Configure database credentials in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/gymmate
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
4. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

---

### 💻 Frontend (ReactJS)
1. Navigate to the frontend directory:
   ```bash
   cd ../gym
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit:
   ```
   http://localhost:3000
   ```

---

## 🧠 Database Schema
**Main Tables:**
- `users` – Stores login credentials and roles.
- `memberships` – Tracks membership duration and status.
- `payments` – Manages payment history and due records.

---

## 📂 Project Structure
```
GymMate/
│
├── gymmate/               # Spring Boot application
│   ├── src/
│   ├── pom.xml
│
├── gym/                   # ReactJS application
│   ├── src/
│   ├── package.json
│
└── README.md
```

---

## 📦 API Overview (Examples)
| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| `POST` | `/api/auth/login`       | Authenticate user         |
| `POST` | `/api/auth/register`    | Register new user         |
| `GET`  | `/api/customers`        | Fetch all customer records|
| `POST` | `/api/customers`        | Add a new customer        |
| `GET`  | `/api/Remainingpayments`| Get all payments          |
| `PUT`  | `/api/memberships/{id}` | Update membership details |

---

## 👨‍💻 Author
**Shreyash Chandwadkar**  
- 💼 [LinkedIn](https://www.linkedin.com/in/shreyash-chandwadkar)  

---


