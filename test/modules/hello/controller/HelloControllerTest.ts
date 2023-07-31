import request from 'supertest';
import { TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import { Hello } from 'test/modules/hello/Hello';
import { HelloController } from 'src/modules/hello/controller/HelloController';

describe('HelloController', () => {
  let e2e: INestApplication;
  let controller: HelloController & any;

  beforeEach(async () => {
    const module: TestingModule = await Hello.createModule();

    e2e = module.createNestApplication();
    await e2e.init();

    controller = module.get<HelloController>(HelloController);
  });

  describe(`getHello should return "${Hello.expectText}"`, () => {
    it('UnitTest', () => {
      expect(controller.getHello()).toBe(Hello.expectText);
    });

    it('E2E', () => {
      return request(e2e.getHttpServer())
        .get('/')
        .expect(200)
        .expect(Hello.expectText);
    });
  });
});
