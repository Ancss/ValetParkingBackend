import { Module } from '@nestjs/common';
import { ManagersService } from './managers.service';
import { ManagersResolver } from './managers.resolver';

@Module({
  providers: [ManagersResolver, ManagersService],
  exports: [ManagersService],
  controllers: [],
})
export class ManagersModule {}
