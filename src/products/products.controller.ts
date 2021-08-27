import {Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, UseGuards} from '@nestjs/common';
import {ProductDto} from "./dto/product.dto";
import {ExternalProductDto} from "./dto/external-product.dto";
import {ProductsDataService} from "./products-data.service";
import {dateToArray} from "../shared/date.helpers";
import {RoleGuard} from "../shared/guards/role.guard";
import {Product} from "./db/products.entity";

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsDataService) {
    }

    @Get(':id')
    async getProductById(@Param('id', new ParseUUIDPipe({ version: '4' })) _id_: string): Promise<ExternalProductDto> {
        return this.mapProductToExternal(await this.productService.getProductById(_id_));
    }

    @Post()
    @UseGuards(RoleGuard)
    async addProduct(@Body() _product_: ProductDto): Promise<ExternalProductDto> {
        return this.mapProductToExternal(await this.productService.addProduct(_product_));
    }

    @Get('')
    async getAllProducts(): Promise<ExternalProductDto[]> {
        const products = await this.productService.getAllProducts();
        return products.map(i => this.mapProductToExternal(i));
    }

    @Delete(':id')
    @HttpCode(204)
    async deleteProduct(@Param('id') _id_: string): Promise<void> {
        await this.productService.deleteProduct(_id_);
    }

    @Put(':id')
    async updateProduct(@Param('id', new ParseUUIDPipe({ version: '4' })) _id_: string, @Body() product: ProductDto):Promise<ExternalProductDto> {
        return this.mapProductToExternal(await this.productService.updateProduct(_id_, product));
    }

    private mapProductToExternal(product: Product): ExternalProductDto {
        return {
            ...product,
            createdAt: dateToArray(product.createdAt),
            updatedAt: dateToArray(product.updatedAt),
            tags: product.tags?.map(i => i.name),
        };
    }
}


