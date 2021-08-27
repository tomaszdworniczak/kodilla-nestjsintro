import {Roles} from "../../shared/enums/roles.enum";
import {IsEmail, IsEnum, IsNotEmpty, ValidateNested} from "class-validator";
import {Transform, Type} from "class-transformer";
import {arrayToDate} from "../../shared/date.helpers";
import {UserAddress} from "../db/user-address.entity";

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
    @Type(() => UserAddress)
    address?: Array<UserAddress>;

    @IsEnum(Roles)
    role: Roles;
}