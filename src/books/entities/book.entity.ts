import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  title: string;

  @Column('simple-array', { nullable: false })
  authors: string[];

  @Column({ nullable: false, unique: true })
  ISBN: string;

  @Column('simple-array', { nullable: false })
  publishers: string[];

  @Column({ nullable: false })
  quantityAvailable: number;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  summary: string;

  @Column({ nullable: false })
  averageRating: number;

  @Column('simple-array', { nullable: false })
  genres: string[];

  @Column('simple-array', { nullable: false })
  reviews: string[];
}
