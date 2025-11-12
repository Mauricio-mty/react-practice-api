# React Practice API

A RESTful API built with Node.js, Express, and Sequelize for managing users and their writings (escritos). This project demonstrates a full-stack practice setup with PostgreSQL as the database.

## Features

- **User Management**: Full CRUD operations for users (create, read, update, delete)
- **Escrito Management**: Full CRUD operations for writings/texts associated with users
- **User-Escrito Relationships**: Retrieve writings by specific users
- **Authentication**: JWT-based login system for secure access
- **Database Integration**: Uses Sequelize ORM with PostgreSQL
- **Environment Configuration**: Secure environment variable handling with dotenv

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-practice-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_DIALECT=postgres
   JWT_SECRET=your_jwt_secret
   ```

4. Ensure PostgreSQL is running and the database exists.

## Running the Application

### Development Mode
```bash
npm run dev
```
This starts the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```

The server will run on port 3000 by default.

## API Endpoints

### Authentication

- **POST /login** - User login
  - Body: `{ "mail": "email", "password": "string" }`
  - Response: `{ "message": "credenciales validas", "token": "jwt_token" }`

### Users

- **GET /user** - Get all users
- **GET /user/:id** - Get user by ID
- **POST /user** - Create a new user
  - Body: `{ "name": "string", "mail": "email", "password": "string" }`
- **PUT /user/:id** - Update user by ID
  - Body: `{ "name": "string", "mail": "email", "password": "string" }`
- **DELETE /user/:id** - Delete user by ID

### Escritos (Writings)

- **GET /escrito** - Get all escritos
- **GET /escrito/:id** - Get escrito by ID
- **GET /escrito/user/:userId** - Get all escritos by user ID
- **POST /escrito** - Create a new escrito
  - Body: `{ "text": "string", "userId": "uuid" }`
- **PUT /escrito/:id** - Update escrito by ID
  - Body: `{ "text": "string", "userId": "uuid" }`
- **DELETE /escrito/:id** - Delete escrito by ID

## Project Structure

```
src/
├── config/
│   ├── db.js              # Database configuration
│   └── routes-config.js   # Route configuration
├── controller/
│   ├── authController.js      # Authentication logic
│   ├── UserController.js      # User endpoints logic
│   └── EscritoController.js   # Escrito endpoints logic
├── middlewares/
│   └── authMiddleware.js      # JWT authentication middleware
├── model/
│   ├── User.js            # User model
│   ├── Escritos.js        # Escrito model
│   └── association.js     # Model associations
├── routes/
│   ├── Login.js           # Login routes
│   ├── UserRoutes.js      # User routes
│   └── EscritoRoutes.js   # Escrito routes
└── service/
    ├── UserService.js     # User business logic
    └── EscritoService.js  # Escrito business logic
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **Sequelize**: Promise-based Node.js ORM for Postgres
- **PostgreSQL**: Relational database
- **JWT**: JSON Web Tokens for authentication
- **bcrypt**: Password hashing
- **UUID**: For generating unique identifiers
- **Dotenv**: Environment variable management
- **Nodemon**: Development tool for auto-restarting

## Database Models

### User
- id: UUID (Primary Key)
- name: String (Required)
- mail: String (Required, Unique, Email validation)
- password: String (Required)

### Escrito
- id: UUID (Primary Key)
- text: Text (Required)
- userId: UUID (Foreign Key to User)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. To access protected endpoints, include the token in the Authorization header as `Bearer <token>`.

## Error Handling

The API includes comprehensive error handling with appropriate HTTP status codes:
- 200: Success
- 201: Created
- 204: No Content (for deletions)
- 401: Unauthorized (invalid credentials or token)
- 403: Forbidden (missing token)
- 404: Not Found
- 500: Internal Server Error

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
