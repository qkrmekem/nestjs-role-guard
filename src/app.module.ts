import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleTestModule } from './role-test/role-test.module';

@Module({
  imports: [RoleTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
