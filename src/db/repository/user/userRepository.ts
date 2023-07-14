import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entity/user/userEntity';

//EntityRepository 대용 ( TypeORM 0.3.0 버전 부터 EntityRepository deperecated)
@EntityRepository(User)
export class UserRepository extends Repository<User> { }