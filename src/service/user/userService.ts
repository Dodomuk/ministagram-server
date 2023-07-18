import { Injectable } from '@nestjs/common';
import { User } from '@entity/user/userEntity';
import { UserRepository } from '@repository/user/userRepository';

@Injectable()
export class UserService {
    constructor(
        private userRepository: UserRepository,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
