import {Tags} from "../enums/tags.enum";
import {IsArray, IsEnum, IsNotEmpty, IsNumber, MaxLength, Min, MinLength} from "class-validator";

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
    @IsEnum(Tags, { each: true })
    tags: Array<Tags>;
}