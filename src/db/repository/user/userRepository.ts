import { Repository } from 'typeorm';
import { User } from '@entity/user/userEntity';
import { CustomRepository } from '@common/Decorator'

//EntityRepository 대용 ( TypeORM 0.3.0 버전 부터 EntityRepository deperecated)
//ASIS: @EntityRepository(User)

@CustomRepository(User)
export class UserRepository extends Repository<User> {
    async findAllUser() {
        return await this.createQueryBuilder('user').select().from(User, 'user')
    }
}