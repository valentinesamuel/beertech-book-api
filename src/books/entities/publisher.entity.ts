import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Publisher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  dateOfEstablishment: string;

  @Column({ nullable: false, unique: true })
  address: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: true })
  phone: string;

  @Column({ nullable: false, unique: true })
  website: string;
}
