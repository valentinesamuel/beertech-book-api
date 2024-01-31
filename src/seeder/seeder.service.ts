import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/books/entities/book.entity';
import { Repository } from 'typeorm';
import { seedBooks } from './seed';

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async seedBooks() {
    try {
      const books = this.bookRepository.create(seedBooks);
      await this.bookRepository.save(books);
    } catch (error) {
      console.error('Error seeding books:', error);
    }
  }
}
