import {Tags} from "../enums/tags.enum";

export interface ProductDto {
    name: string;
    price: number;
    count: number;
    tags: Array<Tags>;
}