import {Injectable} from '@nestjs/common';
import {UserDto} from "./dto/user.dto";
import {v4 as uuidv4} from 'uuid';
import {User} from "./db/users.entity";

@Injectable()
export class UsersDataService {
    private users: User[] = [];

    addUser(newUser: UserDto): User {
        const entity = dtoToEntity(newUser);
        this.users.push(entity);
        return entity;
    }

    getUserById(id: string): User {
        return this.users.find(user => user.id = id);
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

    getUserByEmail(email: string): User {
        return this.users.find(user => user.email === email);
    }
}

function dtoToEntity(dto: UserDto): User {
    return {
        ...dto,
        id: uuidv4(),
    }
}
