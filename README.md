# Lithium Ventures Tech Test

This project is a solution to the Lithium Ventures Tech Test, built with [Next.js](https://nextjs.org/).

## Requirements

### General

- [NodeJS](https://nodejs.org/). You should have Node.js installed on your machine and the version should be greater than or equal to v18.0.0
- Any package manager of your choice. You can use npm, yarn, or pnpm.

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

First, you'll need to clone the repository. Open a terminal or command prompt and run:

```bash
git clone https://github.com/Tashila-109/lithium-tech-test.git
cd lithium-tech-test
```

### 2. Install Dependencies

After cloning the repo, you'll need to install the necessary dependencies. You can do this with npm or Yarn any other package manager you prefer:

```bash
# using npm
npm install
# using yarn
yarn install
# or your preferred package manager
```

### 3. Configure Environment Variables

Before you can run the project, you'll need to set up some environment variables. Create a `.env.local` file in the root directory of the project:

- Create a `.env.local` file in the project root directory. You can follow the structure outlined in the `.env.example` file.

- Set the `NEXT_PUBLIC_LITHIUM_API_URL` variable to the base URL of the API. For example:

```bash
NEXT_PUBLIC_LITHIUM_API_URL=https://theseus-staging.lithium.ventures
```

### 4. Run the Development Server

With the dependencies installed and environment variables set up, you can start the development server:

```bash
# using npm
npm run dev
# using yarn
yarn run dev
# or your preferred package manager
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
