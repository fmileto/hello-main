import { Injectable } from '@nestjs/common';
import { HelloSlaveService } from '@tc-npm-test/hello-slave';

@Injectable()
export class HelloMainService {
  constructor(private readonly helloSlaveService: HelloSlaveService) {}
  getHello() {
    this.helloSlaveService.getHello();
    console.log('Hello from main!');
  }
}
