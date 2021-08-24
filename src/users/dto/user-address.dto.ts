import {IsNotEmpty} from "class-validator";

export class UserAddressDto {
    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    buildingNumber: string;

    @IsNotEmpty()
    flatNumber: string;
}