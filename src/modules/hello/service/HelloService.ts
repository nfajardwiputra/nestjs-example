import { Injectable } from '@nestjs/common';

import { StorageService } from 'nestjs-lib/storage/service/StorageService';

@Injectable()
export class HelloService {
  private readonly storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
