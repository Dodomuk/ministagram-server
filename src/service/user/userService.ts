import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '@/model/user/userModel';
import { UserModel } from '@/module/user/userModule';

@Injectable()
export class UserService {
    contstructor(
        // TODO : 
        // @InjectModel(User)
        // private UserModel: typeof User,
    ) { }

    userHello(): string {
        return 'user';
    }
}
