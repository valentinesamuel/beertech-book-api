import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/book/create-book.dto';
import { Book } from './entities/book.entity';

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        BooksService,
        {
          provide: BooksService,
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

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createBook', () => {
    it('should create a book', () => {
      const book: CreateBookDto = {
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
      };
      const createdBook = controller.create(book);
      expect(createdBook).toEqual(
        expect.objectContaining({ id: expect.any(Number), ...book }),
      );
    });
  });

  describe('findAllBooks', () => {
    it('should return an array of books', async () => {
      const expectedValue = {
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

      const actualValue = controller.findAll(
        expect.any(Number),
        expect.any(Number),
      );
      expect(actualValue).toEqual(Promise.resolve(expectedValue));
    });
  });

  describe('findOneBook', () => {
    it('should return a particular book', () => {
      const specificBook: Book = {
        id: expect.any(Number),
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
      };

      const actualBook = controller.findOne(expect.any(Number));
      expect(actualBook).toEqual(specificBook);
    });
  });

  describe('updateBook', () => {
    it('should update a particular book', () => {
      const updatedBook: Book = {
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
      };

      const actualBook = controller.update(expect.any(Number), updatedBook);
      expect(actualBook).toEqual(updatedBook);
    });
  });

  describe('removeBook', () => {
    it('should remove a particular book', () => {
      const deletedBook: Book = {
        id: 1,
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
      };

      // Call the remove method with the specified ID
      const removedBook = controller.remove(1);

      expect(removedBook).toEqual(deletedBook);
    });
  });
});
