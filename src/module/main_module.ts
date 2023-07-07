import { Module } from '@nestjs/common';
import { AppController } from '@controller/main_controller';
import { AppService } from '@service/main_service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',//사용할 DB (우리는 'mysql')
      host: '아이유',// 호스트
      port: 3306,// 포트번호
      username: 'root', // db username
      password: '1234', // db pswd
      database: 'nest-board',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
