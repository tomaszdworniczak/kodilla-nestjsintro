import {Roles} from "../../shared/enums/roles.enum";
import {UserAddress} from "../db/user-address.entity";

export interface ExternalUserDto {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    dateOfBirth: Array<number>;
    address?: Array<UserAddress>;
    role: Roles;
}