import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  first_name: string;

  @Column({ unique: true, nullable: false })
  last_name: string;

  @Column({ unique: true, nullable: false })
  biography: string;

  @Column({ unique: true, nullable: false })
  birthDate: string;

  @Column({ unique: true, nullable: false })
  nationality: string;

  @Column({ unique: true, nullable: false })
  photo_url: string;

  @ManyToMany(() => Author, (author) => author.books, {
    // cascade: true,
    // cascade: ['insert', 'update'],
  })
  books: Author[];
}
