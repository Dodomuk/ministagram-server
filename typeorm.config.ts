import { TypeOrmModuleOptions } from "@nestjs/typeorm";

//Entities
import { User } from "@/entity/user/userEntity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: '127.0.0.1',
    port: 3306,
    username: "root",
    password: "LotteCard#1",
    database: "lottecard test",
    entities: [User],
    synchronize: true // production모드에서는 false 변경
}