import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { User } from '../models/user.model';
@Controller('users')
export class UsersController {
    users: User[] = [
        User.create(1, 'email1@tes.com', '123')
    ];

    @Get()
    getAll(): User[] {
        return this.users;
    }

    @Get(':id')
    getById(@Param() params): User {
        return this.users[0];
    }

    @Post()
    create(@Body() user:User) {
        console.log(user);
        return this.users.push(user);
    }

    @Put()
    updateById(@Body() user: User): User {
        console.log(user);
        return user;
    }

    @Delete(':id')
    deleteById(@Param() params): string {
        return `${params.id}`;
    }
}