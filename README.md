# Next.js Authentication System

A complete full-stack web application for user authentication built with Next.js 15, TypeScript, Prisma, and NextAuth.js.

## Features

### 🔐 Authentication
- User registration and login
- Secure password hashing with bcryptjs
- JWT-based session management
- Protected routes with automatic redirects
- Form validation with Zod and react-hook-form

### 🎨 User Interface
- Modern, responsive design with Tailwind CSS
- Beautiful UI components with shadcn/ui
- Loading states and error handling
- User dashboard with profile information
- Mobile-friendly design

### 🛡️ Security
- Input validation and sanitization
- Secure password storage
- JWT token authentication
- CSRF protection
- Environment variable configuration

### 🗄️ Database
- SQLite database with Prisma ORM
- User model with email and password fields
- Database migrations and schema management

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, React, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes, NextAuth.js
- **Database:** SQLite, Prisma ORM
- **Authentication:** NextAuth.js, JWT, bcryptjs
- **Validation:** Zod, react-hook-form
- **Styling:** Tailwind CSS, shadcn/ui components

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-auth-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-super-secret-jwt-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push database schema
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── register/
│   │       │   └── route.ts          # Registration API
│   │       ├── login/
│   │       │   └── route.ts          # Login API
│   │       └── [...nextauth]/
│   │           └── route.ts          # NextAuth configuration
│   ├── dashboard/
│   │   └── page.tsx                 # Protected dashboard page
│   ├── login/
│   │   └── page.tsx                 # Login page
│   ├── register/
│   │   └── page.tsx                 # Registration page
│   ├── layout.tsx                   # Root layout
│   └── page.tsx                     # Home page
├── components/
│   ├── providers.tsx                # Session provider
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── auth.ts                     # NextAuth configuration
│   ├── db.ts                       # Prisma database client
│   └── utils.ts                    # Utility functions
└── hooks/
    └── use-toast.ts                # Toast hook
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login with credentials
- `GET /api/auth/session` - Get current session
- `POST /api/auth/signin` - NextAuth sign-in
- `POST /api/auth/signout` - NextAuth sign-out

### Pages
- `/` - Home page with login/register options
- `/register` - User registration form
- `/login` - User login form
- `/dashboard` - Protected user dashboard

## Usage

### Registering a New User
1. Navigate to the home page
2. Click "Create Account"
3. Fill in your email and password
4. Confirm your password
5. Submit the form
6. You'll be redirected to the login page

### Logging In
1. Navigate to the login page
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to the dashboard

### Accessing Protected Routes
- The dashboard is protected and requires authentication
- Unauthenticated users will be redirected to the login page
- Sessions are managed automatically by NextAuth.js

## Configuration

### Environment Variables
- `DATABASE_URL`: Path to your SQLite database file
- `NEXTAUTH_SECRET`: Secret key for JWT tokens
- `NEXTAUTH_URL`: URL of your application

### Customization
- Modify the color scheme in `tailwind.config.ts`
- Update UI components in `src/components/ui/`
- Customize authentication flow in `src/lib/auth.ts`
- Modify database schema in `prisma/schema.prisma`

## Database Schema

```sql
User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Security Features

- **Password Hashing**: Uses bcryptjs with 12 salt rounds
- **Input Validation**: Zod schemas for all form inputs
- **JWT Security**: Secure token generation and validation
- **CSRF Protection**: Built-in NextAuth.js CSRF protection
- **Environment Variables**: Sensitive data stored in environment variables

## Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema
npm run db:generate  # Generate Prisma client
```

### Database Management
```bash
# View database
npx prisma studio

# Reset database
npx prisma db push --force-reset

# Create migration
npx prisma migrate dev
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or issues, please open an issue on the GitHub repository.

---

Built with ❤️ using Next.js, TypeScript, and Prisma