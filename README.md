# Project Structure and Conventions

## Directory Structure

```
src/
├── app/                    # Next.js app router pages and layouts
│   ├── (auth)/            # Authentication related routes
│   ├── (dashboard)/       # Dashboard related routes
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn)
│   ├── forms/            # Form-related components
│   ├── layout/           # Layout components
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions and shared logic
│   ├── utils.ts         # General utilities
│   └── constants.ts     # Constants and configuration
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
├── styles/              # Global styles and CSS modules
└── store/               # State management (if needed)
```

## Path Aliases

We use path aliases to make imports cleaner and more maintainable:

```typescript
// Instead of
import { Button } from "../../../components/ui/button";

// We use
import { Button } from "@ui/button";
```

Available aliases:

- `@/*` - Root of src directory
- `@components/*` - All components
- `@ui/*` - UI components (shadcn)
- `@forms/*` - Form components
- `@layout/*` - Layout components
- `@features/*` - Feature-specific components
- `@lib/*` - Utility functions and shared logic
- `@hooks/*` - Custom React hooks
- `@types/*` - TypeScript type definitions
- `@styles/*` - Global styles and CSS modules
- `@store/*` - State management

## Component Organization

### UI Components (`components/ui/`)

- Reusable, presentational components
- Built with shadcn/ui
- Should be as generic as possible
- Props should be well-documented
- Example: Button, Input, Card, Dialog

### Feature Components (`components/features/`)

- Business logic specific components
- Can use multiple UI components
- Should be organized by feature/domain
- Example: UserProfile, ProductList

### Layout Components (`components/layout/`)

- Page layout components
- Header, Footer, Sidebar
- Navigation components
- Should be reusable across pages

### Form Components (`components/forms/`)

- Form-specific components
- Form validation logic
- Form field components
- Form submission handling

## Code Conventions

### Naming Conventions

- Components: PascalCase (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE
- Types/Interfaces: PascalCase with prefix (e.g., `IUserProfile`)

### File Organization

- One component per file
- Related components in the same directory
- Shared types in `types/` directory
- Utility functions in `lib/` directory

### Component Structure

```typescript
// Imports
import { type FC } from "react";
import { cn } from "@/lib/utils";

// Types
interface Props {
  // ...
}

// Component
export const ComponentName: FC<Props> = ({ prop1, prop2 }) => {
  // ...
};

// Export
export default ComponentName;
```

## Git Commit Conventions

We use conventional commits format:

```
type(scope): subject
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks
- `ci`: CI configuration changes
- `build`: Build system changes
- `revert`: Reverting changes

Example:

```
feat(auth): add login form component
fix(api): resolve user data fetching issue
docs(readme): update installation instructions
```

## Pre-commit Hooks

The project uses Husky for git hooks:

- Pre-commit: Runs ESLint and Prettier
- Pre-push: Runs build check
- Commit-msg: Validates commit message format

## Icon Usage

We use a universal Icon component that wraps Lucide icons:

```typescript
import { Icon } from '@/components/ui/icon'
import { User } from 'lucide-react'

// Usage
<Icon icon={User} size={24} className="text-primary" />
```

## Styling Conventions

- Use Tailwind CSS for styling
- Follow mobile-first approach
- Use CSS variables for theming
- Keep styles close to components
- Use shadcn/ui components as base
