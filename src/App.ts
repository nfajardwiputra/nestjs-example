import { INestApplication } from '@nestjs/common';

import { HelloModule } from 'src/modules/hello/HelloModule';
import { StorageModule } from 'nestjs-lib/storage/StorageModule';
import { AppFactory, Application } from 'nestjs-lib/AppFactory';

@Application({
  port: process.env.PORT,
  imports: [StorageModule, HelloModule],
})
export class App extends AppFactory {
  protected async setApplicationContext(app: INestApplication) {
    await super.setApplicationContext(app);
  }
}
