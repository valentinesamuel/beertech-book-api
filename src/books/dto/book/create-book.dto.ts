import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Book must have a title' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Book must have an author' })
  @IsArray()
  authors: string[];

  @IsNotEmpty({ message: 'Book must have a quantity available' })
  @IsNumber()
  quantityAvailable: number;

  @IsNotEmpty({ message: 'Book must have a price' })
  @IsNumber()
  price: number;

  @IsNotEmpty({ message: 'Book must have a price' })
  @IsNumber({ maxDecimalPlaces: 1 })
  averageRating: number;

  @IsNotEmpty({ message: 'Book must have an ISBN' })
  @IsNumber()
  ISBN: string;

  @IsNotEmpty({ message: 'Book must have a publisher' })
  @IsArray()
  publishers: string[];

  @IsNotEmpty({ message: 'Book must have at leaast one genre' })
  @IsArray()
  genres: string[];

  @IsOptional()
  @IsArray()
  reviews: string[];

  @IsNotEmpty({ message: 'Book must have a summary' })
  @IsString()
  summary: string;

  constructor(bookDTO?: Partial<CreateBookDto>) {
    Object.assign(this, bookDTO);
    this.averageRating = this.averageRating || 0.0;
  }
}
