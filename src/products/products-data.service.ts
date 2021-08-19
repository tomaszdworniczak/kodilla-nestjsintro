import { Injectable } from '@nestjs/common';
import {Product} from "./interfaces/product.interface";
import {ProductDto} from "./dto/product.dto";
import {nanoid} from "nanoid";

@Injectable()
export class ProductsDataService {
    private products: Product[] = [];

    addProduct(newProduct: ProductDto): Product {
        const entity = dtoToEntity(newProduct);
        this.products.push(entity);
        return entity;
    }

    getProductById(id: string): Product {
        return this.products.find(product => product.id = id);
    }

    getAllProducts(): Array<Product> {
        return this.products;
    }

    updateProduct(id: string, dto: ProductDto): Product {
        this.products = this.products.map(i => {
            if (i.id === id) {
                return {
                    ...dto,
                    id: i.id,
                    createdAt: i.createdAt,
                    updatedAt: new Date()
                };
            }
            return i;
        });
        return this.getProductById(id);
    }

    deleteProduct(id: string): void {
        const product = this.getProductById(id);
        if (product) {
            this.products = this.products.filter(item => item.id != id);
        }
    }
}

function dtoToEntity(dto: ProductDto): Product {
    return {
        ...dto,
        id: nanoid(10),
        createdAt: new Date(),
        updatedAt: new Date(),
    }
}
