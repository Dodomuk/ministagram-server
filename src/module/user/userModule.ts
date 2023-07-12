import { Module } from "@nestjs/common";
import { User } from '@entity/user/userEntity';
import { userController } from '@controller/user/userController';
import { UserService } from '@service/user/userService';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    controllers: [userController]
})
export class UserModel {

}