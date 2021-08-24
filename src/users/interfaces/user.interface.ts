import {UserAddress} from "./user-address.interface";
import {Roles} from "../enums/roles.enum";

export interface User {
    id?: string;
    name: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    address?: Array<UserAddress>;
    role: Roles;
}