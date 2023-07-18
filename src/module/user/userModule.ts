import { Module } from "@nestjs/common";
import { User } from '@entity/user/userEntity';
import { userController } from '@controller/user/userController';
import { UserService } from '@service/user/userService';
import { TypeOrmExModule } from '@common/TypeOrmExModule'

@Module({
    imports: [TypeOrmExModule.forCustomRepository([User])],
    providers: [UserService],
    controllers: [userController]
})
export class UserModel {

}