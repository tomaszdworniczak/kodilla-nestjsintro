import { Injectable } from '@nestjs/common';
import {ProductDto} from "./dto/product.dto";
import { v4 as uuidv4 } from 'uuid';
import {Product} from "./db/products.entity";
import {Tag} from "./db/tags.entity";
import {ProductRepository} from "./db/product.repository";
import {TagRepository} from "./db/tag.repository";

@Injectable()
export class ProductsDataService {
    constructor(private productRepository: ProductRepository, private tagRepository: TagRepository) {
    }

    async addProduct(item: ProductDto): Promise<Product> {
        const tags: Tag[] = await this.tagRepository.findTagsByName(item.tags);
        const productToSave = new Product();
        productToSave.name = item.name;
        productToSave.price = item.price;
        productToSave.count = item.count;
        productToSave.tags = tags;
        return this.productRepository.save(productToSave);
    }

    async deleteProduct(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }

    async updateProduct(id: string, item: ProductDto): Promise<Product> {
        const tags: Tag[] = await this.tagRepository.findTagsByName(item.tags);
        const productToUpdate = await this.getProductById(id);

        productToUpdate.name = item.name;
        productToUpdate.price = item.price;
        productToUpdate.count = item.count;
        productToUpdate.tags = tags;

        await this.productRepository.save(productToUpdate);

        return this.getProductById(id);
    }

    getProductById(id: string): Promise<Product> {
        return this.productRepository.findOne(id);
    }

    getAllProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

}
function dtoToEntity(dto: ProductDto): Product {
    return {
        ...dto,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
    }
}
