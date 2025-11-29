# Contributing to Apex Moves

Thank you for your interest in contributing to Apex Moves! This document provides guidelines for contributing to this project.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/jaawwaddev/apex-moves`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`

## Code Standards

### TypeScript
- All new code must be written in TypeScript
- Maintain strict type safety - avoid `any` types
- Export types and interfaces for reusable components

### React Components
- Use functional components with hooks
- Follow the single responsibility principle
- Create reusable, composable components
- Add proper prop types with TypeScript interfaces

### Styling
- Use Tailwind CSS utility classes
- Follow the existing color token system
- Ensure responsive design for all screen sizes
- Test on multiple browsers

### Code Style
- Use 2 spaces for indentation
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Commit Guidelines

Follow conventional commit format:

```
type(scope): subject

body (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Example:**
```
feat(quote): add real-time price preview

Added live updating price calculation as user fills out the quote form
```

## Pull Request Process

1. Create a feature branch: `git checkout -b feat/your-feature-name`
2. Make your changes
3. Run type checking: `npm run type-check`
4. Test the build: `npm run build`
5. Commit your changes with conventional commit messages
6. Push to your fork
7. Create a Pull Request with a clear description

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing!