# Nuxt 3 Dynamic Components Demo

This is a simple Nuxt 3 application to showcase dynamic components in Nuxt. 
Features for the application include: 

* Form validation using Vee Validate form library, managing value tracking, validation and errors.

* Multi-form with next and previous step navigation using Vee Validate
* Dynamic components using  Vue component syntax and using keep alive to keep form inputs complete during navigation.
* Vee Validate Field Array component used to manage repeatable array fields. 
* Dockerfile to efficiently build the application in both development and production environments while keeping the final production image as lean as possible.
* Enhanced accessibility through the use of aria attributes (e.g., aria-invalid, aria-describedby) and appropriate roles (e.g., role="alert") to provide better context and error handling for users with assistive technologies.

## Tech Stack
[![My Skills](https://skillicons.dev/icons?i=vue,nuxt,html,css,less,docker)](https://skillicons.dev)


# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Docker

Create and start the development container:

  ```bash
  docker compose up --build -d
  ```
  
Stop and remove the development container:

  ```bash
  docker compose down
  ```

Create and start the production container:

  ```bash
  docker compose -f compose.production.yaml up --build -d
  ```

Stop and remove the production container:

  ```bash
  docker compose -f compose.production.yaml down
  ```
