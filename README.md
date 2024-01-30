# Project Name

This project is a backend API for managing books, providing endpoints for Create, Read, Update, and Delete (CRUD) operations.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Database](#database)
- [API Endpoints](#api-endpoints)
<!-- - [Authentication](#authentication) -->
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Bookstore API is a robust backend system designed to efficiently manage book-related data, allowing users to perform CRUD operations seamlessly.


## Features

- Create, Read, Update, and Delete books.
<!-- - User authentication for secure operations.
- Logging for tracking API activities. -->

## Getting Started

Guide on how to set up the project locally.

### Prerequisites

- Node.js
- Npm
- Docker (optional)

### Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. If you have Docker installed and want to use a postgres database instead of a local sqlite database, run `docker compose up` to start the  container that includes the application, postgres database and adminer(Database Management UI). Otherwise, proceed to step 4.
4. Add the environment variables in the `.env` file (see `.env.example` for reference)
5. Run the application with `npm start`.

## Project Structure

The project structure follows the standard NestJS architecture, with key directories serving specific purposes:

- `src/controllers`: Controllers handling incoming requests.
- `src/services`: Business logic and data manipulation.
- `src/models`: Data models representing books.
- `src/middleware`: Custom middleware for request handling.
- ...

## Configuration

The application can be configured using environment variables, defined in the `.env` file. For example:
```env
DB_HOST=localhost
DB_PORT=5432
...
```

## Database

The API uses a aqlite database to store the data. However, you have docker installed and run the following command
```bash
$ git branch dockerized_app
$ docker compose up
```
you would be using PostgreSQL database to store book information. The database schema includes tables for books. For detailed information, refer to the database documentation for [postgresql]("https://google.com") and [sqlite]("https://google.com").

## API Endpoints

List and document each API endpoint, including request and response formats.

### Example:

#### `GET POST /api/books`

- **Description:** Get a list of all books.
- **Request:**
    ```json
    {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "year": 1954
    }
    ```
- **Response:**
    ```json
    {
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "year": 1954
    }
    ```
- Status: 200 OK
- Body:
    ```json
  [
      {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "year": 1954
      },
<!-- // TODO: Change the return data payload -->

      {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "year": 1954
      }
  ]
    ```

<!-- ## Authentication

Explain how authentication is implemented, including any tokens or keys required. -->

## Testing
To run tests, use the following command
```bash
  $ npm test
```
This project uses Jest for testing.

## Deployment

For deployment, follow these guidelines below:

1. Set environment variables.
2. Build the application with `yarn build`.
3. Deploy the built application to your server.


## Contributing

I would love to hear some feedbacks from the accessor of this project. If you have any suggestions or contributions, please fork the repository and create a pull request or simply open an issue with the tag "enhancement". Don't forget to leave a star if you found this project useful.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
