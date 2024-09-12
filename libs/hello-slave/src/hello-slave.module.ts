import { Module } from '@nestjs/common';
import { HelloSlaveService } from './hello-slave.service';

@Module({
  providers: [HelloSlaveService],
  exports: [HelloSlaveService],
})
export class HelloSlaveModule {}
