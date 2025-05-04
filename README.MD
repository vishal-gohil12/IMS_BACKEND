# User Management API

A modular, scalable Node.js + TypeScript REST API with Express for managing users. Includes route protection, layered architecture, and database integration.

---

## 📁 Project Structure

project-root/
│
├── src/
│ ├── config/ # Environment configs, DB setup
│ │ └── db.ts
│ ├── controllers/ # Route handlers (user.controller.ts)
│ ├── models/ # Database schema/models (user.model.ts)
│ ├── routes/ # Express route definitions (user.routes.ts)
│ ├── services/ # Business logic layer (user.service.ts)
│ ├── middlewares/ # Middlewares (auth, error handling)
│ ├── utils/ # Helper utilities (e.g., logger)
│ ├── types/ # Custom TypeScript types/interfaces
│ ├── app.ts # Express app setup
│ └── server.ts # Server bootstrap (listen on port)
│
├── .env # Environment variables
├── tsconfig.json # TypeScript configuration
├── package.json # Project metadata and dependencies
└── README.md # Project documentation