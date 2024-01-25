import { Test, TestingModule } from '@nestjs/testing';
import { RoleTestService } from './role-test.service';

describe('RoleTestService', () => {
  let service: RoleTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleTestService],
    }).compile();

    service = module.get<RoleTestService>(RoleTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
