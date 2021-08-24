import {Roles} from "../enums/roles.enum";
import {UserAddressDto} from "./user-address.dto";
import {IsEmail, IsEnum, IsNotEmpty, ValidateNested} from "class-validator";
import {Transform, Type} from "class-transformer";
import {arrayToDate} from "../../shared/date.helpers";

export class UserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Transform(({value: d}) => arrayToDate(d))
    dateOfBirth: Date;

    @ValidateNested({ each: true })
    @Type(() => UserAddressDto)
    address?: Array<UserAddressDto>;

    @IsEnum(Roles)
    role: Roles;
}