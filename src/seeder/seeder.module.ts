import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from 'src/books/books.service';
import { Book } from 'src/books/entities/book.entity';
import { SeederService } from './seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [SeederService, BooksService],
})
export class SeederModule {}
