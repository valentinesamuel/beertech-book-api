import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  title: string;

  @Column({ unique: true, nullable: false })
  book_id: string;

  @Column({ unique: true, nullable: false })
  user_id: string;

  @Column({ unique: true, nullable: false })
  rating: number;

  @Column({ unique: true, nullable: false })
  content: number;
}
