import {Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put} from '@nestjs/common';
import {UsersDataService} from "./users-data.service";
import {User} from "./interfaces/user.interface";
import {ExternalUserDto} from "./dto/external-user.dto";
import {UserDto} from "./dto/user.dto";
import {dateToArray} from "../shared/date.helpers";

@Controller('users')
export class UsersController {
    constructor(private usersRepository: UsersDataService) {
    }

    @Get(':id')
    getUserById(@Param('id', new ParseUUIDPipe({ version: '4' })) _id_: string): ExternalUserDto {
        return this.mapUserToExternal(this.usersRepository.getUserById(_id_));
    }

    @Post()
    addUser(@Body() _user_: UserDto): ExternalUserDto {
        return this.mapUserToExternal(this.usersRepository.addUser(_user_));
    }

    @Get('')
    getAllUsers(): ExternalUserDto[] {
        return this.usersRepository.getAllUsers().map(item => this.mapUserToExternal(item));
    }

    @Delete(':id')
    @HttpCode(204)
    deleteUser(@Param('id') _id_: string): void {
        this.usersRepository.deleteUser(_id_);
    }

    @Put(':id')
    updateProduct(@Param('id', new ParseUUIDPipe({ version: '4' })) _id_: string, @Body() user: UserDto): ExternalUserDto {
        return this.mapUserToExternal(this.usersRepository.updateUser(_id_, user));
    }

    private mapUserToExternal(user: User): ExternalUserDto {
        return {
            ...user,
            dateOfBirth: dateToArray(user.dateOfBirth),
        };
    }
}
