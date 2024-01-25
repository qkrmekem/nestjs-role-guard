import { Test, TestingModule } from '@nestjs/testing';
import { RoleTestController } from './role-test.controller';
import { RoleTestService } from './role-test.service';

describe('RoleTestController', () => {
  let controller: RoleTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleTestController],
      providers: [RoleTestService],
    }).compile();

    controller = module.get<RoleTestController>(RoleTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
