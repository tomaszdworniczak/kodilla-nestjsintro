import {UserAddress} from "../interfaces/user-address.interface";
import {Roles} from "../enums/roles.enum";

export interface ExternalUserDto {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    dateOfBirth: Array<number>;
    address: Array<UserAddress>;
    role: Roles;
}