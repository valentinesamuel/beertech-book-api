import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Book must have a title' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'Book must have an author' })
  @IsArray()
  authors: TAuthor[];

  @IsNotEmpty({ message: 'Book must have a quantity available' })
  @IsNotEmpty({ message: 'Field name must be added' })
  @IsString()
  quantityAvailable: number;

  price: number;

  averageRating: number;

  ISBN: string;

  publishers: TPublisher[];

  genres: TGenre[];

  reviews: TReview[];

  summary: string;
}
