import { Controller, Get } from '@nestjs/common';
import { UserService } from '@service/user/userService';

@Controller()
export class userController {
    constructor(private readonly userService: UserService) { }

    @Get()
    userHello(): string {
        return this.userService.userHello();
    }
}
