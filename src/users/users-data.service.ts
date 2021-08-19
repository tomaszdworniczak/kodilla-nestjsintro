import { Injectable } from '@nestjs/common';
import {User} from "./interfaces/user.interface";
import {nanoid} from "nanoid";
import {UserDto} from "./dto/user.dto";
import {arrayToBirthDate, arrayToDate} from "../shared/date.helpers";

@Injectable()
export class UsersDataService {
    private users: User[] = [];

    addUser(newUser: UserDto): User {
        const entity = dtoToEntity(newUser);
        this.users.push(entity);
        return entity;
    }

    getUserById(id: string): User {
        return this.users.find(product => product.id = id);
    }

    getAllUsers(): Array<User> {
        return this.users;
    }

    updateUser(id: string, dto: UserDto): User {
        this.users = this.users.map(i => {
            if (i.id === id) {
                return {
                    ...dto,
                    id: i.id,
                    dateOfBirth: arrayToBirthDate(dto.dateOfBirth),
                };
            }
            return i;
        });
        return this.getUserById(id);
    }

    deleteUser(id: string): void {
        const user = this.getUserById(id);
        if (user) {
            this.users = this.users.filter(item => item.id != id);
        }
    }
}

function dtoToEntity(dto: UserDto): User {
    return {
        ...dto,
        id: nanoid(10),
        dateOfBirth: arrayToBirthDate(dto.dateOfBirth),
    }
}
