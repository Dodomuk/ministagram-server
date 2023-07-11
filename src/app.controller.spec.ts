import { Test, TestingModule } from '@nestjs/testing';
import { MainController } from '@controller/main_controller';
import { MainService } from '@service/main_service';

describe('AppController', () => {
  let appController: MainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainController],
      providers: [MainService],
    }).compile();

    appController = app.get<MainController>(MainController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
