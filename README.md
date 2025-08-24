# Next Starter

A modern **Next.js starter template** with authentication, database, UI components, and developer tooling preconfigured.  
Built for fast prototyping and production-ready apps.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)

---

## 🚀 Features

- ⚡ **Next.js 15** with Turbopack for lightning-fast development
- 🔑 **Better Auth** for secure authentication flows
- 🗄️ **Drizzle ORM** with Neon/Postgres for type-safe database operations
- 🎨 **Tailwind CSS v4** + `tailwind-merge` + `tw-animate-css` for modern styling
- 🎛️ **Radix UI** primitives + `lucide-react` icons for accessible components
- 📝 **React Hook Form** + `zod` validation for robust forms
- 🌙 **Dark mode** support via `next-themes`
- ✅ **ESLint + TypeScript** for code quality and type safety
- 🔧 **Environment variable support** with validation

---

## 📂 Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable UI components
│   ├── ui/        # Base UI components (buttons, inputs, etc.)
│   └── forms/     # Form-specific components
├── db/            # Drizzle ORM setup & migrations
│   ├── schema.ts  # Database schema definitions
│   └── migrate.ts # Migration utilities
├── lib/           # Utility functions & configurations
│   ├── auth.ts    # Authentication configuration
│   ├── db.ts      # Database connection
│   └── utils.ts   # General utilities
├── styles/        # Tailwind & global styles
└── types/         # TypeScript type definitions
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- A Neon database (or any Postgres database)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd next-starter
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Authentication
AUTH_SECRET="your-super-secret-jwt-secret-here"
AUTH_TRUST_HOST="true"

# Optional: OAuth providers (if using)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

> **Note:** Generate a secure `AUTH_SECRET` using: `openssl rand -base64 32`

### 3. Set Up Database

```bash
# Push database schema
npm run db:push

# Or run migrations (if you prefer migrations over push)
npm run db:migrate
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

---

## 📜 Available Scripts

| Command              | Description                             |
| -------------------- | --------------------------------------- |
| `npm run dev`        | Start development server with Turbopack |
| `npm run build`      | Create optimized production build       |
| `npm start`          | Run production server                   |
| `npm run lint`       | Run ESLint code linting                 |
| `npm run type-check` | Run TypeScript type checking            |
| `npm run db:push`    | Push schema changes to database         |
| `npm run db:studio`  | Open Drizzle Studio (database GUI)      |

---

## 🧩 Tech Stack

### Core

- **[Next.js 15](https://nextjs.org/)** – React framework with app router
- **[React 19](https://react.dev/)** – UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Type safety

### Styling

- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** – Accessible UI primitives
- **[Lucide React](https://lucide.dev/)** – Beautiful icons
- **[next-themes](https://github.com/pacocoursey/next-themes)** – Dark mode support

### Backend & Database

- **[Drizzle ORM](https://orm.drizzle.team/)** – TypeScript-first ORM
- **[Neon](https://neon.tech/)** – Serverless Postgres
- **[Better Auth](https://www.better-auth.com/)** – Authentication solution

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** – Performant forms
- **[Zod](https://zod.dev/)** – TypeScript-first validation

---

## 🎨 Customization

### Adding New Components

```bash
# Add a new UI component
npx shadcn-ui add button

# Create custom components in src/components/
```

### Database Schema

Edit `src/db/schema.ts` to modify your database schema, then run:

```bash
npm run db:push
```

### Authentication

Configure authentication providers in `src/lib/auth.ts`. The starter includes email/password auth by default.

---

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

- **Netlify:** Works with static export or server functions
- **Railway:** Great for full-stack apps with built-in database
- **Docker:** Use the included `Dockerfile` for containerized deployment

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Drizzle team](https://orm.drizzle.team/) for the excellent ORM
- All the open-source contributors who made these tools possible

---

<div align="center">
  <p>Built with ❤️ using Next.js</p>
  <p>
    <a href="https://github.com/yourusername/next-starter/issues">Report Bug</a>
    ·
    <a href="https://github.com/yourusername/next-starter/issues">Request Feature</a>
    ·
    <a href="https://github.com/yourusername/next-starter">Give a ⭐</a>
  </p>
</div>
