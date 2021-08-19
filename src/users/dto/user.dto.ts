import {Roles} from "../enums/roles.enum";
import {UserAddressDto} from "./user-address.dto";

export interface UserDto {
    name: string;
    lastName: string;
    email: string;
    dateOfBirth: Array<number>;
    address: Array<UserAddressDto>;
    role: Roles;
}