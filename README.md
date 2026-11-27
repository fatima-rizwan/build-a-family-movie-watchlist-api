<div align="center">

# 🎬 Family Movie Watchlist API

### Node.js • Express.js • JWT Authentication

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![freeCodeCamp](https://img.shields.io/badge/freeCodeCamp-0A0A23?style=for-the-badge&logo=freecodecamp&logoColor=white)

A secure REST API for managing family movie watchlists with authentication and role-based access control.

</div>

---

## 📌 About the Project

This project is part of the **freeCodeCamp Back End Development and APIs Certification**.

The Family Movie Watchlist API allows family members to manage their personal movie watchlists. It uses JWT-based authentication and role-based authorization to control access to movie management operations.

## ✨ Features

- User login with username and password
- JWT token-based authentication
- Protected API routes
- Parent and child roles
- Role-based authorization
- Retrieve individual user watchlists
- Add movies to watchlists
- Update movie details
- Delete movies from watchlists
- JSON-based data storage

## 🛠️ Technologies Used

<div align="center">

| Technology | Purpose |
|:---:|:---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| JSON Web Token | Authentication |
| bcryptjs | Password verification |
| Helmet | HTTP security headers |
| JavaScript | Application logic |
| JSON | Data storage |

</div>

## 📁 Project Structure

```text
build-a-family-movie-watchlist-api/
│
├── data/
│   ├── users.json
│   └── watchlists.json
│
├── middleware/
│   ├── authenticate.js
│   └── authorize.js
│
├── routes/
│   ├── auth.js
│   └── watchlist.js
│
├── utils/
│   └── db.js
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fatima-rizwan/build-a-family-movie-watchlist-api.git
```

### 2. Navigate to the project directory

```bash
cd build-a-family-movie-watchlist-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

The API runs at:

```text
http://localhost:3000
```

## 🔐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|:---:|:---|:---|
| POST | `/api/auth/login` | Authenticate a user and receive a JWT |

### Watchlist

All watchlist endpoints require a valid Bearer token.

| Method | Endpoint | Description |
|:---:|:---|:---|
| GET | `/api/watchlist/:userId` | Retrieve a user's watchlist |
| POST | `/api/watchlist/:userId/movies` | Add a movie |
| PUT | `/api/watchlist/:userId/movies/:movieId` | Update a movie |
| DELETE | `/api/watchlist/:userId/movies/:movieId` | Delete a movie |

## 👨‍👩‍👧‍👦 Authorization

The application supports two user roles:

- **Parent:** Can manage movies in any family member's watchlist.
- **Child:** Can manage movies in their own watchlist only.

Authenticated users can view any family member's watchlist.

## 🔑 Authentication

After a successful login, the API returns a JWT token.

Include the token in protected requests using the Authorization header:

```text
Authorization: Bearer YOUR_TOKEN
```

## 🎓 Learning Outcomes

- Building RESTful APIs with Express.js
- Implementing JWT authentication
- Working with password hashing
- Creating custom Express middleware
- Implementing role-based authorization
- Handling protected routes
- Managing JSON-based application data

---

<div align="center">

### Built with ❤️ by Fatima Rizwan

**Back-End Development and APIs Certification Project**

[GitHub Profile](https://github.com/fatima-rizwan)

</div>
