import {Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from '@nestjs/common';
import {ProductDto} from "./dto/product.dto";
import {ExternalProductDto} from "./dto/external-product.dto";
import {ProductsDataService} from "./products-data.service";
import {Product} from "./interfaces/product.interface";
import {dateToArray} from "../shared/date.helpers";

@Controller('products')
export class ProductsController {
    constructor(private productsRepository: ProductsDataService) {
    }

    @Get(':id')
    getProductById(@Param('id') _id_: string): ExternalProductDto {
        return this.mapProductToExternal(this.productsRepository.getProductById(_id_));
    }

    @Post()
    addProduct(@Body() _product_: ProductDto): ExternalProductDto {
        return this.mapProductToExternal(this.productsRepository.addProduct(_product_));
    }

    @Get('')
    getAllProducts(): ExternalProductDto[] {
        return this.productsRepository.getAllProducts().map(item => this.mapProductToExternal(item));
    }

    @Delete(':id')
    @HttpCode(204)
    deleteProduct(@Param('id') _id_: string): void {
        this.productsRepository.deleteProduct(_id_);
    }

    @Put(':id')
    updateProduct(@Param('id') _id_: string, @Body() product: ProductDto): ExternalProductDto {
        return this.mapProductToExternal(this.productsRepository.updateProduct(_id_, product));
    }

    private mapProductToExternal(product: Product): ExternalProductDto {
        return {
            ...product,
            createdAt: dateToArray(product.createdAt),
            updatedAt: dateToArray(product.updatedAt),
        };
    }
}

