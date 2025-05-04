## 📁 Project Structure

```
project-root/
│
├── src/
│   ├── config/                 # Environment configs, DB setup
│   │   ├── db.ts               # Database connection setup
│   │   ├── env.ts              # Environment variable configuration
│   │   └── logger.ts           # Logging configuration (optional)
│   │
│   ├── controllers/            # Route handlers
│   │   ├── auth.controller.ts  # Authentication controller
│   │   └── user.controller.ts  # User management controller
│   │
│   ├── models/                 # Database schema/models
│   │   └── user.model.ts       # User model definition
│   │
│   ├── routes/                 # Express route definitions
│   │   ├── auth.routes.ts      # Authentication routes
│   │   └── user.routes.ts      # User management routes
│   │
│   ├── services/               # Business logic layer
│   │   ├── auth.service.ts     # Authentication service
│   │   └── user.service.ts     # User service
│   │
│   ├── middlewares/            # Custom middlewares
│   │   ├── auth.middleware.ts  # JWT verification middleware
│   │   ├── error.middleware.ts # Error handling middleware
│   │   ├── validation.middleware.ts # Request validation
│   │   └── logger.middleware.ts # Request logging
│   │
│   ├── utils/                  # Helper utilities (Optional)
│   │   ├── jwt.utils.ts        # JWT token utilities
│   │   ├── password.utils.ts   # Password hashing utilities
│   │   └── response.utils.ts   # Standardized API responses
│   │
│   ├── types/                  # Custom TypeScript types/interfaces
│   │   └── user.types.ts       # User-related types
│   └── index.ts               # Server bootstrap
│
├── .env                        # Environment variables (gitignored)
├── .gitignore                  # Git ignore file
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```
