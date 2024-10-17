# Loan Manager Application

This is a full-stack Loan Manager application built with MongoDB, Express.js, React, and Node.js (MERN stack).

## Features

- User authentication (register, login, logout)
- Role-based access control (user, verifier, admin)
- Apply for loans (users)
- View and manage loan applications (all roles)
- Approve or reject loan applications (verifiers and admins)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository
2. Install backend dependencies:
   
   cd backend
   npm install
   
3. Install frontend dependencies:
   
   cd frontend
   npm install
   

### Running the application

1. Start the backend server:
   
   cd backend
   npm run dev
   
2. Start the frontend development server:
   
   cd frontend
   npm start
   

The application should now be running at http://localhost:3000.

## Environment Variables

Create a .env file in the backend directory with the following variables:


PORT=5000
MONGODB_URI=mongodb://localhost:27017/loan-manager
JWT_SECRET=your_jwt_secret


Replace your_jwt_secret with a secure secret key for JWT token generation.



