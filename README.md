# DevPulse – Internal Tech Issue & Feature Tracker

A collaborative backend platform for software teams to report bugs, suggest features, and coordinate issue resolution workflows.

---

# 🚀 Live URL

API Base URL:

```bash
https://batch-7-assignment-02.vercel.app/
```

---

# ✨ Features

- User registration & login with JWT authentication
- Password hashing using bcrypt
- Role-based authorization system
- Create bug reports and feature requests
- View all issues with filtering & sorting
- Get single issue details
- Contributor & maintainer permission system
- Maintainers can manage all issues
- Protected private routes
- Centralized error handling
- PostgreSQL database integration using raw SQL
- Modular Express.js architecture

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| Node.js | Backend runtime |
| TypeScript | Type-safe development |
| Express.js | REST API framework |
| PostgreSQL | Relational database |
| pg | PostgreSQL driver |
| bcrypt | Password hashing |
| jsonwebtoken | JWT authentication |
| dotenv | Environment variables |
| cors | Cross-origin requests |

---

# 📁 Project Structure

```bash
src/
│
├── app.ts
├── server.ts
│
├── config/
├── modules/
├── middleware/
├── interfaces/
├── utils/
└── types/
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/JabirSiddiqueTalim/Batch-07-Assignment-02
```

---

## 2. Move Into Project

```bash
cd devpulse
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

DB_USER=postgres
DB_HOST=localhost
DB_NAME=devpulse
DB_PASS=your_password
DB_PORT=5432

JWT_SECRET=your_secret_key
```

---

## 5. Run SQL Tables

### users table

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'contributor'
    CHECK (role IN ('contributor', 'maintainer')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### issues table

```sql
CREATE TABLE issues (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(30) NOT NULL
    CHECK (type IN ('bug', 'feature_request')),
    status VARCHAR(30) DEFAULT 'open'
    CHECK (status IN ('open', 'in_progress', 'resolved')),
    reporter_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 6. Run the Project

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

---

# 🔐 Authentication

Protected routes require JWT token in headers:

```bash
Authorization: <JWT_TOKEN>
```

---

# 🌐 API Endpoints

# Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |

---

# Issues

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/issues` | Create issue |
| GET | `/api/issues` | Get all issues |
| GET | `/api/issues/:id` | Get single issue |
| PATCH | `/api/issues/:id` | Update issue |
| DELETE | `/api/issues/:id` | Delete issue |

---

# 🔑 Role Permissions

| Role | Permissions |
|---|---|
| contributor | Create issues, view issues, update own open issues |
| maintainer | Full contributor access + update/delete any issue |

---

# 📌 Query Parameters

## Get All Issues

```bash
GET /api/issues?sort=newest&type=bug&status=open
```

### Supported Query Params

| Param | Values |
|---|---|
| sort | newest, oldest |
| type | bug, feature_request |
| status | open, in_progress, resolved |

---

# 📦 Example Success Response

```json
{
  "success": true,
  "message": "Issue created successfully",
  "data": {
    "id": 1,
    "title": "Database issue",
    "description": "Pool timeout problem",
    "type": "bug",
    "status": "open"
  }
}
```

---

# ❌ Example Error Response

```json
{
  "success": false,
  "message": "Unauthorized access",
  "errors": "Invalid token"
}
```

---

# 🧠 Important Notes

- Raw SQL queries only (`pool.query()`)
- No ORM or query builder used
- No SQL JOIN queries used
- Passwords are securely hashed
- JWT used for protected routes
- Modular architecture followed

---

# 👨‍💻 Author

Md Jabir Siddique Talim
