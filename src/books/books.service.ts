import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/book/create-book.dto';
import { UpdateBookDto } from './dto/book/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) {}
  async create(createBookDto: CreateBookDto) {
    try {
      const newBook = this.bookRepo.create(createBookDto);
      return await this.bookRepo.save(newBook);
    } catch (error) {
      throw new HttpException(
        'Something went wrong.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll({ page, pageSize }) {
    try {
      const skip = (page - 1) * pageSize;
      const take = pageSize;
      const [data, totalCount] = await Promise.all([
        this.bookRepo.find({
          skip,
          take,
        }),
        this.bookRepo.count(),
      ]);

      return { data, page, pageSize, totalCount };
    } catch (error) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    const book = await this.bookRepo.findOneBy({
      id: id,
    });

    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }

    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const existingBook = await this.bookRepo.findOne({ where: { id } });

    if (!existingBook) {
      throw new HttpException('Book Not Found', HttpStatus.NOT_FOUND);
    }

    this.checkEntityId(id, existingBook);
    await this.bookRepo.update(id, updateBookDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedBook = await this.bookRepo.findOneBy({
      id,
    });

    if (!deletedBook) {
      throw new HttpException('Book Not Found', HttpStatus.NOT_FOUND);
    }
    await this.bookRepo.delete(id);
    return deletedBook;
  }

  private checkEntityId(id: number, existingBook: Book) {
    if (+id !== existingBook.id) {
      throw new HttpException('Book ID does not match', HttpStatus.BAD_REQUEST);
    }
  }
}
