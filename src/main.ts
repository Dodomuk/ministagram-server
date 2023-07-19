import { NestFactory } from '@nestjs/core';
import { MainModule } from '@module/main_module';
import { SwaggerSetting } from '@common/SwaggerSetting';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  //Swagger 주소&상세 설정
  SwaggerSetting(app);
  await app.listen(3000);
}
bootstrap();
