import {IsArray, IsEnum, IsNotEmpty, IsNumber, MaxLength, Min, MinLength} from "class-validator";
import {Tag} from "../db/tags.entity";

export class ProductDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(25)
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    count: number;

    @IsArray()
    @IsEnum(Tag, { each: true })
    tags: Tag[];
}