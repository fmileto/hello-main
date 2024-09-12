import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloSlaveService {
  getHello() {
    console.log('Hello from slave!');
  }
}
