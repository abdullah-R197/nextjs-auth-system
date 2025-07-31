# Authentication Web Application

A complete full-stack web application for user authentication built with Next.js 15, TypeScript, Prisma, and NextAuth.js.

## Features

- **User Registration**: Sign up with email and password
- **User Login**: Secure login with credentials
- **Session Management**: JWT-based authentication with NextAuth.js
- **Dashboard**: User profile page with greeting and account information
- **Form Validation**: Client-side validation with Zod and React Hook Form
- **Responsive Design**: Mobile-friendly UI with shadcn/ui components
- **Security**: Password hashing with bcryptjs
- **Database**: SQLite with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, React 19
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Authentication**: NextAuth.js v4
- **Database**: SQLite with Prisma ORM
- **Form Handling**: React Hook Form with Zod validation
- **Password Hashing**: bcryptjs
- **State Management**: Zustand, TanStack Query

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/
│   │       │   └── route.ts
│   │       ├── register/
│   │       │   └── route.ts
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/ (shadcn/ui components)
│   └── providers.tsx
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.ts
└── lib/
    ├── auth.ts
    ├── db.ts
    ├── socket.ts
    └── utils.ts
```

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd <project-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following content:
   ```env
   DATABASE_URL=file:./db/custom.db
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Set up the database**:
   ```bash
   npm run db:push
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## API Routes

### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": null,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### POST `/api/auth/login`
Authenticate a user and create a session.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "name": null
  }
}
```

### GET `/api/auth/[...nextauth]`
NextAuth.js authentication endpoints for session management.

## Database Schema

The application uses SQLite with the following schema:

```sql
CREATE TABLE "User" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "name" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:reset` - Reset database

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs with a salt factor of 12
- **Input Validation**: Client and server-side validation using Zod schemas
- **Session Management**: Secure JWT-based sessions with NextAuth.js
- **CSRF Protection**: Built-in CSRF protection with NextAuth.js
- **Environment Variables**: Sensitive configuration stored in environment variables

## Error Handling

The application includes comprehensive error handling:

- **Form Validation**: Real-time validation feedback on all forms
- **API Errors**: Proper HTTP status codes and error messages
- **Database Errors**: Graceful handling of database connection and query errors
- **Authentication Errors**: Clear feedback for login/registration failures

## Styling

The application uses:
- **Tailwind CSS 4** for utility-first styling
- **shadcn/ui** components for consistent, accessible UI elements
- **Responsive Design** with mobile-first approach
- **Dark Mode Support** through next-themes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the MIT License.