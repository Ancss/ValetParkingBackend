import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';

@Module({
  providers: [CustomersResolver, CustomersService],
  exports: [CustomersService],
  controllers: [],
})
export class CustomersModule {}
