import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function SwaggerSetting(app: INestApplication): void {
    const options = new DocumentBuilder()
        .setTitle('ministagram swagger setting')
        .setDescription('API description')
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('go-swagger', app, document);
}