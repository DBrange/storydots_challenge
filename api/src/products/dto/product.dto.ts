import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}