import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  contstructor() { }

  getHello(): string {
    return 'super shy';
  }
}
