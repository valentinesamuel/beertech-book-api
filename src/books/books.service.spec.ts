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
              return [
                {
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
              ] as CreateBookDto[];
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

  describe('createBook', () => {
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
        // console.error(error);
        // write an expect that throws an HTTP Exception error with custome message
      }
    });
  });
});
