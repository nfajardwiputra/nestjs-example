import { Module } from '@nestjs/common';

import { HelloService } from 'src/modules/hello/service/HelloService';
import { HelloController } from 'src/modules/hello/controller/HelloController';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
  exports: [HelloService],
})
export class HelloModule {}
