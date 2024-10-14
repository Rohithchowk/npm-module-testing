# Authentication Testing Repository

This repository is created to test the functionality of three open-source npm modules: `react-easy-login`, `react-easy-register`, and `auto-auth-server`. These modules help to simplify authentication setup for MERN stack developers.

## Features
- **Minimal Code** for login and registration.
- **JWT-based Authentication** for secure sessions.
- **Bcrypt Encryption** for password security.
- **Easy MongoDB Integration** for seamless database interaction.

## Installation and Setup

### Frontend (React App)

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```
2. Run the backend
   ```npm
   npm install auto-auth-server
   node server.js
   ```
3. Run the frontend
   ```npm
   cd testapp
   npm i react-router-dom
   npm i react-easy-register
   npm i react-easy-login
   npm start
   ```

The app includes the following routes:

/home : Home Page
/login : Login Page
/ : Registration Page

Project Structure:
authentication-testing-repo/
├── backend/                          # Backend (Node.js) related files
│   ├── server.js                     # Main server file using ``auto-auth-server``
│   ├── package.json                  # Backend package.json for dependencies
│   └── node_modules/                 # Node modules for the backend
├── frontend/                         # Frontend (React.js) related files
│   ├── public/                       # Public directory (React.js)
│   │   ├── index.html                # Main HTML file for React
│   │   └── logo.svg                  # React logo
│   ├── src/                          # Source code for React app
│   │   ├── App.js                    # Main app component
│   │   ├── Home.js                   # Home component
│   │   ├── Login.js                  # Login component ``(uses `react-easy-login`)``
│   │   ├── Register.js               # Register component ``(can use `react-easy-register`)``
│   │   ├── App.css                   # Styling for the app
│   │   └── index.js                  # Main entry point for React app
│   ├── package.json                  # Frontend package.json for dependencies
│   └── node_modules/                 # Node modules for the frontend
├── README.md                         # Project README file
└── .gitignore                        # Git ignore file for node_modules and other files


