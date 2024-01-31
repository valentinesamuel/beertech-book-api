import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsNotEmpty({ message: 'Book id must be present' })
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  title?: string;

  @IsOptional()
  @IsArray({ message: 'Authors must be an array of strings' })
  authors?: string[];

  @IsOptional()
  @IsNumber({}, { message: 'Quantity available must be a number' })
  quantityAvailable?: number;

  @IsOptional()
  @IsNumber({}, { message: 'Price must be a number' })
  price?: number;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 1 },
    { message: 'Average rating must be a number with at most 1 decimal place' },
  )
  averageRating?: number;

  @IsOptional()
  @IsString({ message: 'ISBN must be a string' })
  ISBN?: string;

  @IsOptional()
  @IsArray({ message: 'Publishers must be an array of strings' })
  publishers?: string[];

  @IsOptional()
  @IsArray({ message: 'Genres must be an array of strings' })
  genres?: string[];

  @IsOptional()
  @IsArray({ message: 'Reviews must be an array of strings' })
  reviews?: string[];

  @IsOptional()
  @IsString({ message: 'Summary must be a string' })
  summary?: string;
}
