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
- [Documentation](#documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Bookstore API is a robust backend system designed to efficiently manage book-related data, allowing users to perform CRUD operations seamlessly.

## Features

- Create Books
- Read Books
- Update Books
- Delete books.

## Getting Started

Guide on how to set up the project locally.

### Prerequisites

- Node.js
- Npm

### Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application with `npm start`.

## Project Structure

The project structure follows the standard NestJS architecture, with key directories serving specific purposes:

- `*/controllers`: Controllers handling incoming requests.
- `*/services`: Business logic and data manipulation.
- `*/entities`: Data models representing books.
- `*/dto`: Data transfer objects to validate the requests.

## Configuration

The application does not need any configuration to run

## Database

The API uses a Sqlite database to store the data. The database schema includes tables for books. For detailed information, refer to the database documentation for [sqlite]("https://google.com").

## API Endpoints

List and document each API endpoint, including request and response formats.

### Example:

#### `GET /books?limit=5&offset=10`

- **Description:** Get a list of all books.
- **Request:**
  This enpoint does not require a request body.
- **Response:**
  ```json
  {
    "data": [
      {
        "id": 1,
        "title": "Sample Book Title",
        "authors": ["Author One", "Author Two"],
        "ISBN": "978-1-234-56789-0",
        "publishers": ["Publisher One", "Publisher Two"],
        "quantityAvailable": 10,
        "price": 29,
        "summary": "This is a sample book summary.",
        "averageRating": 4,
        "genres": ["Fiction", "Mystery"],
        "reviews": ["Great book!", "Highly recommended."]
      },
      {
        "id": 2,
        "title": "The Great Gatsby",
        "authors": ["F. Scott Fitzgerald"],
        "ISBN": "978-0-7432-7356-5",
        "publishers": ["Scribner"],
        "quantityAvailable": 15,
        "price": 12,
        "summary": "A classic novel depicting the American Dream during the Roaring Twenties.",
        "averageRating": 4,
        "genres": ["Fiction", "Classic"],
        "reviews": ["Timeless masterpiece!", "Captivating narrative."]
      },
      {
        "id": 3,
        "title": "To Kill a Mockingbird",
        "authors": ["Harper Lee"],
        "ISBN": "978-0-06-112008-4",
        "publishers": ["J.B. Lippincott & Co."],
        "quantityAvailable": 20,
        "price": 14,
        "summary": "A powerful story addressing racial injustice in the American South.",
        "averageRating": 4,
        "genres": ["Fiction", "Drama"],
        "reviews": ["Must-read!", "Impactful storytelling."]
      },
      {
        "id": 4,
        "title": "1984",
        "authors": ["George Orwell"],
        "ISBN": "978-0-452-28423-4",
        "publishers": ["Secker & Warburg"],
        "quantityAvailable": 18,
        "price": 11,
        "summary": "A dystopian novel exploring themes of totalitarianism and surveillance.",
        "averageRating": 4,
        "genres": ["Fiction", "Science Fiction"],
        "reviews": ["Thought-provoking!", "Eerily relevant."]
      },
      {
        "id": 5,
        "title": "The Catcher in the Rye",
        "authors": ["J.D. Salinger"],
        "ISBN": "978-0-316-76948-0",
        "publishers": ["Little", " Brown and Company"],
        "quantityAvailable": 12,
        "price": 10,
        "summary": "A classic novel exploring teenage angst and alienation.",
        "averageRating": 4,
        "genres": ["Fiction", "Coming-of-Age"],
        "reviews": ["Iconic narrative!", "Relatable characters."]
      }
    ],
    "page": 1,
    "limit": "5",
    "totalCount": 23
  }
  ```
- **Status**: 200 OK

#### `GET /books/4`

- **Description:** Get a a particular book.
- **Request:**
  This enpoint does not require a request body.
- **Response:**
  ```json
  {
    "id": 4,
    "title": "The Girl on the Train",
    "authors": ["Paula Hawkins"],
    "ISBN": "978-1-59463-402-4",
    "publishers": ["Riverhead Books"],
    "quantityAvailable": 22,
    "price": 18.99,
    "summary": "A psychological thriller involving a woman entangled in a missing person's investigation.",
    "averageRating": 4.7,
    "genres": ["Fiction", "Mystery"],
    "reviews": ["Riveting suspense!", "Page-turner."]
  }
  ```
- **Status**: 200 OK

#### `PATCH /books/8`

- **Description:** Update a particular book.
- **Request:**
  ```json
  {
    "id": 8,
    "title": "The Martian 2",
    "authors": ["Andy Weir"],
    "ISBN": "978-0-553-41802-6",
    "publishers": ["Crown Publishing Group"],
    "quantityAvailable": 18,
    "price": 15.99,
    "summary": "A science fiction novel about an astronaut stranded on Mars and his struggle for survival. Second edition.",
    "averageRating": 4.9,
    "genres": ["Fiction", "Science Fiction"],
    "reviews": ["Gripping survival story!", "Humorous and suspenseful."]
  }
  ```
- **Response:**

```json
{
  "id": 8,
  "title": "The Martian 2",
  "authors": ["Andy Weir"],
  "ISBN": "978-0-553-41802-6",
  "publishers": ["Crown Publishing Group"],
  "quantityAvailable": 18,
  "price": 15.99,
  "summary": "A science fiction novel about an astronaut stranded on Mars and his struggle for survival. Second edition.",
  "averageRating": 4.9,
  "genres": ["Fiction", "Science Fiction"],
  "reviews": ["Gripping survival story!", "Humorous and suspenseful."]
}
```

- **Status**: 200 OK

#### `POST /books`

- **Description:** Add a book to the collection.
- **Request:**

  ```json
  {
    "title": "Becoming",
    "authors": ["Michelle Obama"],
    "ISBN": "978-1-5247-6313-8",
    "publishers": ["Crown Publishing Group"],
    "quantityAvailable": 20,
    "price": 25.99,
    "summary": "The memoir of former First Lady Michelle Obama, reflecting on her life and experiences.",
    "averageRating": 4.8,
    "genres": ["Non-Fiction", "Memoir"],
    "reviews": ["Empowering narrative!", "Insightful and relatable."]
  }
  ```

- **Response:**
  ```json
  {
    "id": 23,
    "title": "Becoming",
    "authors": ["Michelle Obama"],
    "ISBN": "978-1-5247-6313-8",
    "publishers": ["Crown Publishing Group"],
    "quantityAvailable": 20,
    "price": 25.99,
    "summary": "The memoir of former First Lady Michelle Obama, reflecting on her life and experiences.",
    "averageRating": 4.8,
    "genres": ["Non-Fiction", "Memoir"],
    "reviews": ["Empowering narrative!", "Insightful and relatable."]
  }
  ```
- **Status**: 200 OK

#### `DELETE /books/1`

- **Description:** Delete a particular book.
- **Request:**
  ```json
  {
    "id": 1,
    "title": "Educated",
    "authors": ["Tara Westover"],
    "ISBN": "978-0-399-59050-4",
    "publishers": ["Random House"],
    "quantityAvailable": 18,
    "price": 20.99,
    "summary": "A memoir recounting a woman's journey from a survivalist family to Cambridge University.",
    "averageRating": 4.9,
    "genres": ["Non-Fiction", "Memoir"],
    "reviews": ["Compelling life story!", "Inspiring."]
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Educated",
    "authors": ["Tara Westover"],
    "ISBN": "978-0-399-59050-4",
    "publishers": ["Random House"],
    "quantityAvailable": 18,
    "price": 20.99,
    "summary": "A memoir recounting a woman's journey from a survivalist family to Cambridge University.",
    "averageRating": 4.9,
    "genres": ["Non-Fiction", "Memoir"],
    "reviews": ["Compelling life story!", "Inspiring."]
  }
  ```
- **Status**: 200 OK

## Documentation


PDF Documentation for this project can be found here at [Beertech API Documentation.pdf](https://github.com/valentinesamuel/beertech-book-api/files/14127480/Beertech.API.Documentation.pdf)

Postman Collection for this project can be found below: <br/> <br/>
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/14004903-dd7299ff-3138-494d-8b81-c57f0e76e31f?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D14004903-dd7299ff-3138-494d-8b81-c57f0e76e31f%26entityType%3Dcollection%26workspaceId%3D0334c4de-8dd2-4f1d-b6cc-2b037260f6a7)

## Testing

To run tests, use the following command

```bash
  $ npm test
```

This project uses Jest for testing.

## Deployment

For deployment, follow these guidelines below:

1. Build the application with `yarn build`.
2. Deploy the built application to your server.

## Contributing

I would love to hear some feedbacks from the accessor of this project. If you have any suggestions or contributions, please fork the repository and create a pull request or simply open an issue with the tag "enhancement". Don't forget to leave a star if you found this project useful.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
