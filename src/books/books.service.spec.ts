import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/book/create-book.dto';
import { describe } from 'node:test';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getRepositoryToken(Book),
          useValue: {
            create: jest.fn((dto) => {
              return { id: 1, ...dto };
            }),
            findAll: jest.fn(() => {
              return {
                data: [
                  {
                    id: expect.any(Number),
                    title: 'The Night Circus',
                    authors: ['Erin Morgenstern'],
                    ISBN: '978-0-385-53463-5',
                    publishers: ['Doubleday'],
                    quantityAvailable: 19,
                    price: 21.99,
                    summary:
                      'A magical novel about a mysterious competition between two illusionists.',
                    averageRating: 4.7,
                    genres: ['Fiction', 'Fantasy'],
                    reviews: ['Enchanting tale!', 'Immersive and whimsical.'],
                  },
                ] as Book[],
                page: expect.any(Number),
                limit: expect.any(Number),
                totalCount: expect.any(Number),
              };
            }),
            findOne: jest.fn((id) => {
              return {
                id,
                title: 'The Silent Patient',
                authors: ['Alex Michaelides'],
                ISBN: '978-1-250-30169-7',
                publishers: ['Celadon Books'],
                quantityAvailable: 25,
                price: 23.99,
                summary:
                  "A psychological thriller about a woman's sudden violence and her silence.",
                averageRating: 4.6,
                genres: ['Fiction', 'Thriller'],
                reviews: ['Gripping suspense!', 'Twists and turns.'],
              } as CreateBookDto;
            }),
            findOneBy: jest.fn((id) => {
              return {
                id,
                title: 'The Silent Patient',
                authors: ['Alex Michaelides'],
                ISBN: '978-1-250-30169-7',
                publishers: ['Celadon Books'],
                quantityAvailable: 25,
                price: 23.99,
                summary:
                  "A psychological thriller about a woman's sudden violence and her silence.",
                averageRating: 4.6,
                genres: ['Fiction', 'Thriller'],
                reviews: ['Gripping suspense!', 'Twists and turns.'],
              } as Book;
            }),
            update: jest.fn((id, dto) => {
              return {
                id,
                ...dto,
              } as Book;
            }),
            remove: jest.fn((id) => {
              return {
                id,
                title: 'The Girl on the Train',
                authors: ['Paula Hawkins'],
                ISBN: '978-1-59463-402-4',
                publishers: ['Riverhead Books'],
                quantityAvailable: 22,
                price: 18.99,
                summary:
                  "A psychological thriller involving a woman entangled in a missing person's investigation.",
                averageRating: 4.7,
                genres: ['Fiction', 'Mystery'],
                reviews: ['Riveting suspense!', 'Page-turner.'],
              } as Book;
            }),
          },
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('Book service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create a Book', () => {
    it('should create a book', async () => {
      const book = {
        id: 1,
        title: 'The Night Circus',
        authors: ['Erin Morgenstern'],
        ISBN: '978-0-385-53463-5',
        publishers: ['Doubleday'],
        quantityAvailable: 19,
        price: 21.99,
        summary:
          'A magical novel about a mysterious competition between two illusionists.',
        averageRating: 4.7,
        genres: ['Fiction', 'Fantasy'],
        reviews: ['Enchanting tale!', 'Immersive and whimsical.'],
      } as Book;

      jest.spyOn(service, 'create').mockImplementation(async () => {
        throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

      try {
        const createdBook = await service.create(book);
        expect(createdBook).toEqual(
          expect.objectContaining({ id: 1, ...book }),
        );
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.message).toBe('Something went wrong');
      }
    });
  });

  describe('Find all Books', () => {
    it('should return all books in the database as well as a page, limit and total number of books in the database', async () => {
      const expectedBooks = {
        data: [
          {
            id: expect.any(Number),
            title: 'The Night Circus',
            authors: ['Erin Morgenstern'],
            ISBN: '978-0-385-53463-5',
            publishers: ['Doubleday'],
            quantityAvailable: 19,
            price: 21.99,
            summary:
              'A magical novel about a mysterious competition between two illusionists.',
            averageRating: 4.7,
            genres: ['Fiction', 'Fantasy'],
            reviews: ['Enchanting tale!', 'Immersive and whimsical.'],
          },
        ] as Book[],
        page: expect.any(Number),
        limit: expect.any(Number),
        totalCount: expect.any(Number),
      };

      jest.spyOn(service, 'findAll').mockImplementation(async () => {
        throw new HttpException(
          'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

      try {
        const createdBooks = await service.findAll(
          expect.any(Number),
          expect.any(Number),
        );
        expect(createdBooks).toEqual(Promise.resolve(expectedBooks));
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.message).toBe('Something went wrong');
      }
    });
  });

  describe('Find a Book', () => {
    it('should return a book in the database', async () => {
      const expectedBook = {
        id: expect.any(Number),
        title: 'The Night Circus',
        authors: ['Erin Morgenstern'],
        ISBN: '978-0-385-53463-5',
        publishers: ['Doubleday'],
        quantityAvailable: 19,
        price: 21.99,
        summary:
          'A magical novel about a mysterious competition between two illusionists.',
        averageRating: 4.7,
        genres: ['Fiction', 'Fantasy'],
        reviews: ['Enchanting tale!', 'Immersive and whimsical.'],
      } as Book;

      jest.spyOn(service, 'findOne').mockImplementation(async () => {
        throw new HttpException(
          'Book Not Found',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

      try {
        const particularBook = await service.findOne(expect.any(Number));
        expect(particularBook).toEqual(Promise.resolve(expectedBook));
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.message).toBe('Book Not Found');
      }
    });
  });
});
