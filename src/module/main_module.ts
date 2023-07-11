import { Module } from '@nestjs/common';
import { MainController } from '@controller/main_controller';
import { MainService } from '@service/main_service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@model/user/userModel';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',//사용할 DB (우리는 'mysql')
      host: '127.0.0.1',// 호스트
      port: 3306,// 포트번호
      username: 'root', // db username
      password: 'LotteCard#1', // db pswd
      database: 'lottecard test',
      models: [User],
    }),
  ],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule { }
