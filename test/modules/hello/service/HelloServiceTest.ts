import { Hello } from 'test/modules/hello/Hello';
import { HelloService } from 'src/modules/hello/service/HelloService';

describe('HelloService', () => {
  let service: HelloService & any;

  beforeEach(async () => {
    service = (await Hello.createModule()).get<HelloService>(HelloService);
  });

  it(`UnitTest getHello should return "${Hello.expectText}"`, () => {
    expect(service.getHello()).toBe(Hello.expectText);
  });
});
