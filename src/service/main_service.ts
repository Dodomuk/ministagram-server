import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class MainService {
  contstructor() { }

  getHello(): string {
    return 'super shy';
  }
}
