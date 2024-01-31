import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
      throw new BadRequestException(error, {
        description: 'Sorry, something went wrong.',
      });
    }
  }

  findAll() {
    try {
      const books = this.bookRepo.find();
      return books;
    } catch (error) {
      throw new NotFoundException(error, {
        description: 'Sorry, we coulod not find any books',
      });
    }
  }

  findOne(id: number) {
    try {
      const book = this.bookRepo.findOne({
        where: {
          id: id,
        },
      });
      return book;
    } catch (error) {
      throw new NotFoundException(error, {
        description: 'Sorry, we could not find that book',
      });
    }
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    try {
      const updatedBook = this.bookRepo.update(id, updateBookDto);
      return updatedBook;
    } catch (error) {
      throw new BadRequestException(error, {
        description: 'Sorry, something went wrong',
      });
    }
  }

  remove(id: number) {
    try {
      const deletedBook = this.findOne(id);
      this.bookRepo.delete(id);
      return deletedBook;
    } catch (error) {
      throw new BadRequestException(error, {
        description: 'Sorry, something went wrong',
      });
    }
  }
}
