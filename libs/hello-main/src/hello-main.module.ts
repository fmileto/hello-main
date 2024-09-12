import { Module } from '@nestjs/common';
import { HelloMainService } from './hello-main.service';

@Module({
  providers: [HelloMainService],
  exports: [HelloMainService],
})
export class HelloMainModule {}
