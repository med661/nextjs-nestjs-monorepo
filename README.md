# nextjs-nestjs-monorepo

A monorepo project using Next.js for the frontend and NestJS for the backend.

## Prerequisites

- Node.js (v14 or later)
- Yarn

## Setup

1. Clone the repository:

   ```
   git https://github.com/med661/nextjs-nestjs-monorepo.git
   cd nextjs-nestjs-monorepo
   ```

2. Install dependencies:
   ```
   yarn install:all
   ```

## Running the project

### Development mode

You can run both the frontend and backend concurrently with:

```
yarn dev
```

Or run them separately:

1. Start the Next.js frontend:

   ```
   yarn dev:nextjs
   ```

2. In a new terminal, start the NestJS backend:
   ```
   yarn dev:nestjs
   ```

The frontend will be available at `http://localhost:3000` (default Next.js port).
The backend API will be available at `http://localhost:5000` (default NestJS port).

## Project Structure

- `/apps/client`: Next.js frontend
- `/apps/server`: NestJS backend

## Scripts

- `yarn dev`: Run both frontend and backend in development mode
- `yarn dev:nextjs`: Run Next.js frontend in development mode
- `yarn dev:nestjs`: Run NestJS backend in development mode
- `yarn install:all`: Install all dependencies

## Dependencies

This project uses the following main dependencies:

- Next.js
- React
- NestJS
- TypeScript

For a full list of dependencies and dev dependencies, please refer to the `package.json` file.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
