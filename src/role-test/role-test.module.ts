import { Module } from '@nestjs/common';
import { RoleTestService } from './role-test.service';
import { RoleTestController } from './role-test.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';

@Module({
  controllers: [RoleTestController],
  providers: [
    RoleTestService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    },
  ],
})
export class RoleTestModule {}
