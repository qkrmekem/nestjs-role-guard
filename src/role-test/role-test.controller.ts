import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { RoleTestService } from './role-test.service';
import { Roles } from './decorators/roles.decorator';
import { Role } from './enum/role.enum';
import { RolesGuard } from './guards/roles.guard';

@Controller('role-test')
export class RoleTestController {
  constructor(private readonly roleTestService: RoleTestService) {}

  @Post()
  @Roles(Role.Admin)
  @UseGuards(RolesGuard)
  create(@Body() param: any){
    console.log('role-test 파라미터', param);
  }
}
