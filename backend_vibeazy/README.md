# Vibeazy written with Express and PostgreSQL

This project is a web application built with [Express.js](https://expressjs.com/) and uses [PostgreSQL](https://www.postgresql.org/) as the database. The app is designed to be robust, scalable, and easy to deploy.

---

## Features
- RESTful API built with Express.js. 
- PostgreSQL for data persistence.
- Migrations handled with Prima ORM
- Environment variables for secure configuration

---

## Prerequisites
Ensure the following are installed on your system or use docker:
- [Node.js](https://nodejs.org/) (v14 or later)
- [PostgreSQL](https://www.postgresql.org/) (v12 or later)
- [npm](https://www.npmjs.com/) for dependency management

---

## Setup and Installation

Follow these steps to run the application locally:

### 1. Clone the Repository
git clone https://github.com/your-username/your-repo.git

cd new-repo

### 2. Install Dependencies
To install the required dependencies, run the following command:

npm install or npm i

### 3. Create a .env file with the below fields

- PORT = 3000
- JWT_SECRET = add a secret
- FLW_HASH = Add a key for this
- EMAIL_HOST = smtp.gmail.com
- EMAIL_SERVICE = gmail
- EMAIL_USER = add the email address to this
- EMAIL_PASSWORD = add it password
- OTP_EXPIRY_MINUTE = OTP Expiration
- FLW_SECRET = FLW Secret from flutterwave
- APP_ENV = PROD
- SESSION_DURATION = Add a require duration
- DATABASE_URL = Add the database url

### Useful Prisma Commands

| Command                         | Description                                           |
|---------------------------------|-------------------------------------------------------|
| `npx prisma init`               | Initialize Prisma in your project                    |
| `npx prisma migrate dev`        | Apply pending migrations in development              |
| `npx prisma migrate deploy`     | Apply migrations in production                       |
| `npx prisma studio`             | Open Prisma Studio for database management           |
| `npx prisma generate`           | Generate Prisma client after updating the schema     |
| `npx prisma db seed`            | Seed the database with initial data (if configured)  |