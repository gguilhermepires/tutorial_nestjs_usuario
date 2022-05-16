import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('users')
export class UsersController {
    
    
    @Get()
    getAll():string {
        return 'all userrs';
    }
      
    @Get(':id')
    getById(@Param() params):string {
        return `${params.id}`;
    }

    @Post()
    create(@Body() user):string {
        console.log(user);
        return '';
    }

    @Put()
    updateById(@Body() user):string {
        console.log(user);
        return '';
    }

    @Delete(':id')
    deleteById(@Param() params):string {
        return `${params.id}`;
    }
}