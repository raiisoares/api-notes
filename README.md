# API Notes

This project is an API designed for managing notes, developed as a study tool and intended to be integrated with a frontend application. It is built using **Node.js** with **Fastify**, **Prisma**, **Docker**, and **PostgreSQL**.

## 🚀 Key Features

- Fast and lightweight API built with Fastify.
- Database management and ORM using Prisma.
- Containerized environment with Docker.
- Support for development, testing, and production environments.

---
## 🖥️ Tech Stack

[![Stack](https://skillicons.dev/icons?i=ts,nodejs,docker,postgres,prisma,vitest,githubactions)](https://skillicons.dev)

---

## ▶️ Getting Started

Follow these steps to set up and run the application:

### 1. **Rename the Environment File**

Rename the existing `.env.example` file to `.env`.

### 2. **Configure Environment Variables**

Open the `.env` file and set the required variables as shown below:
      ```
       NODE_ENV=
       DATABASE_URL=
      ```
- NODE_ENV: Specifies the environment; possible values are dev, test, or production.
- DATABASE_URL: The connection string for your database.

For testing purposes, you can use the PostgreSQL Docker image with the following DATABASE_URL:
- `postgresql://docker:docker@localhost:5432/api-notes-db?schema=public`

If you are using the containerized setup, proceed with the following command to build and start the Docker image:
- `docker compose up --build -d`

### 3. **Run the Application**

To start the application in the development environment, use the following command:
- `npm run dev`

After completing these steps, the application should be fully operational

## Tools and Services for Development

This project leverages a variety of tools and services to ensure seamless development, testing, and deployment. Below is an overview of the key tools used:

- **Docker**: A containerization platform that simplifies the process of building, deploying, and running applications in a consistent environment across systems.
    - [Documentation](https://docs.docker.com/)

- **PostgreSQL**: A powerful, open-source relational database system known for its robustness, extensibility, and SQL compliance.
    - [Documentation](https://www.postgresql.org/docs/)

- **Prisma**: A next-generation ORM that simplifies database access with type safety, migrations, and a declarative schema.
    - [Documentation](https://www.prisma.io/docs/)

- **Vitest**: A blazing-fast unit testing framework built for Vite, designed for modern front-end development with built-in TypeScript support.
    - [Documentation](https://vitest.dev/)

- **GitHub Actions**: A powerful CI/CD tool that enables automated workflows for testing, building, and deploying your application directly from your GitHub repository.
    - [Documentation](https://docs.github.com/en/actions)
---

## 📄 License

This software is available under the following licenses:

- [MIT](https://rem.mit-license.org)

Feel free to fork the repository, modify the code, and use it for your own projects. Contributions are welcome to help
improve the project and expand its capabilities.