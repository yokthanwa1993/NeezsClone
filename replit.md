# Overview

Neeiz is a comprehensive job marketplace platform specifically designed for the Thai market. It connects job seekers with employers through a modern, mobile-first interface with full Thai language support. The platform offers LINE Login authentication, advanced job search and filtering, real-time messaging, application tracking, and employer branding features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Next.js 14** with TypeScript for type-safe React development
- **Static Site Generation (SSG)** configured with `output: 'export'` for optimal performance
- **Tailwind CSS** for utility-first styling with custom Thai font integration (Noto Sans Thai)
- **React Hook Form** for efficient form management with validation
- **Client-side routing** with Next.js router for seamless navigation

## Backend Architecture
- **Firebase Functions** providing serverless backend infrastructure
- **Express.js** API server with CORS configured for multiple domains
- **Modular route structure** separating authentication and job management logic
- **TypeScript** throughout the backend for type safety

## Authentication System
- **LINE Login** as the primary authentication method for Thai market compatibility
- **Firebase Authentication** with custom token integration
- **OAuth 2.0 flow** handling authorization code exchange and user profile retrieval
- **Session management** with Firebase Auth state persistence

## Data Storage
- **Firebase Firestore** as the primary NoSQL database
- **Optimized indexing** for job searches by status, location, and timestamps
- **Document-based collections** for jobs, applications, users, and companies
- **Firebase Storage** for file uploads including CVs and company logos

## Mobile-First Design
- **Responsive layout** optimized for mobile devices
- **Touch-friendly UI components** with proper spacing and sizing
- **Progressive Web App (PWA)** capabilities through Next.js configuration

## Type Safety & Code Organization
- **Shared TypeScript types** in dedicated packages for consistency across frontend and backend
- **Centralized constants** for routes, job types, and application statuses
- **Custom hooks** for authentication state and job data fetching

# External Dependencies

## Core Services
- **Firebase Suite**: Authentication, Firestore database, Cloud Functions, and Storage
- **LINE API**: OAuth authentication and user profile services
- **Vercel/Firebase Hosting**: Static site deployment and CDN

## Frontend Libraries
- **React 19** with React DOM for UI components
- **Next.js 15** for SSR/SSG framework
- **Tailwind CSS 4** for styling system
- **Heroicons** for consistent iconography
- **React Hot Toast** for user notifications
- **date-fns** for date manipulation with Thai locale support

## Backend Dependencies
- **Firebase Admin SDK** for server-side Firebase operations
- **Express.js** with CORS middleware for API routing
- **Axios** for external API calls to LINE services
- **Bcrypt** and **jsonwebtoken** for additional security measures
- **Validator** for input sanitization

## Development Tools
- **TypeScript 5** for static typing
- **ESLint** with Next.js configuration for code quality
- **PostCSS** with Autoprefixer for CSS processing
- **Firebase CLI** for local development and deployment

## Thai Market Integrations
- **LINE Login API** for seamless authentication
- **Thai language fonts** (Noto Sans Thai) via Google Fonts
- **Thai locale support** in date formatting and UI text