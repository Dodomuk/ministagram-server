import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@model/user/userModel';
import { userController } from '@controller/user/userController';
import { UserService } from '@service/user/userService';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UserService],
    controllers: [userController]
})
export class UserModel {
}