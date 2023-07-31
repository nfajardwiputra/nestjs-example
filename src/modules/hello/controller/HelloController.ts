import { Controller, Get } from '@nestjs/common';

import { HelloService } from 'src/modules/hello/service/HelloService';

@Controller()
export class HelloController {
  constructor(private readonly service: HelloService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
