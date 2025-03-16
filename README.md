# MBA Rocketseat Nest Clean

This project is part of the MBA Web Development course by Rocketseat. It is built using NestJS and follows a clean architecture approach.

## Project Structure

The project is organized into several directories, each serving a specific purpose:

- `.env`, `.env.template`: Environment configuration files.
- `biome.json`, `nest-cli.json`, `package.json`, `pnpm-lock.yaml`, `tsconfig.build.json`, `tsconfig.json`, `vitest.config.e2e.ts`, `vitest.config.ts`: Configuration files for various tools and libraries.
- `data/`: Contains database configuration files.
  - `pg/`: PostgreSQL configuration files.
- `prisma/`: Contains Prisma schema and migrations.
  - `schema.prisma`: Prisma schema file.
  - `migrations/`: Prisma migrations.
- `src/`: Main source code directory.
  - `core/`: Core functionalities and utilities.
  - `domain/`: Domain entities and use cases.
  - `infra/`: Infrastructure-related code.
- `test/`: Contains test-related code.
  - `setup-e2e.ts`: End-to-end test setup.
  - `cryptography/`, `factories/`, `repositories/`, `utils/`: Various test utilities and helpers.
- `transcriptions/`: Contains transcriptions of the course lessons.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- PNPM (or npm/yarn)
- Docker (for running PostgreSQL)

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    pnpm install
    ```

3. Set up the environment variables:
    ```sh
    cp .env.template .env
    # Edit the .env file with your configuration
    ```

4. Start the PostgreSQL database using Docker:
    ```sh
    docker-compose up -d
    ```

5. Run the Prisma migrations:
    ```sh
    pnpm prisma migrate dev
    ```

6. Start the development server:
    ```sh
    pnpm start:dev
    ```

### Project Structure for New Developers

#### Adding/Changing Use Cases

1. **Domain Layer**: Define or update the domain entities and use cases in the `src/domain/` directory.
2. **Application Layer**: Implement the use cases and services in the `src/application/` directory.
3. **Infrastructure Layer**: Update the infrastructure-related code in the `src/infra/` directory, such as repositories and data mappers.

### Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.