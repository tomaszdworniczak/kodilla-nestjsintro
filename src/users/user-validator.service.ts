import { Injectable } from '@nestjs/common';
import {UsersDataService} from "./users-data.service";
import {UserRequireUniqueEmailException} from "./exception/user-require-unique-email-exception";

@Injectable()
export class UserValidatorService {
    constructor(private userDataService: UsersDataService) {
    }

    validateUniqueEmail(email: string): void {
        const user = this.userDataService.getUserByEmail(email);
        if (user) {
            throw new UserRequireUniqueEmailException();
        }
    }
}
