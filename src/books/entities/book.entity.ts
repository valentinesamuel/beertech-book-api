import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  title: string;

  @ManyToMany(() => Author, (author) => author.books, {
    cascade: true,
    // cascade: ['insert', 'update'],
  })
  authors: Author[];

  @Column({ nullable: false, unique: true })
  ISBN: string;

  @Column({ nullable: false, unique: true })
  quantityAvailable: number;

  @Column({ nullable: false, unique: true })
  price: number;

  @Column({ nullable: false, unique: true })
  summary: string;
}
