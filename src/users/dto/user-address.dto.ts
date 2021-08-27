import {IsNotEmpty} from "class-validator";
import {UserDto} from "./user.dto";

export class UserAddressDto {
    user?: UserDto;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    buildingNumber: number;

    @IsNotEmpty()
    flatNumber: number;
}