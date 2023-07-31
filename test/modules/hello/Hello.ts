import { Test, TestingModule } from '@nestjs/testing';
import {
  getModuleMetadata,
  resolveImportProviders,
} from 'nestjs-lib/AppFactory';

import { HelloModule } from 'src/modules/hello/HelloModule';
import { StorageModule } from 'nestjs-lib/storage/StorageModule';

export const Hello = {
  expectText: 'Hello World!',
  createModule(): Promise<TestingModule> {
    resolveImportProviders({
      imports: [StorageModule, HelloModule],
    });

    return Test.createTestingModule(getModuleMetadata(HelloModule)).compile();
  },
};
