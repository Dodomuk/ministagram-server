import { Controller, Get } from '@nestjs/common';
import { UserService } from '@service/user/userService';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('회원정보')
@Controller('/user')
export class userController {
    constructor(private readonly userService: UserService) { }

    @Get('/findAll')
    @ApiOperation({ summary: '유저 목록 전체 조회' })
    async finAllUser() {
        return await this.userService.findAll();
    }
}
