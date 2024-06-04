import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsResolver } from './bookings.resolver';

@Module({
  providers: [BookingsResolver, BookingsService],
  exports: [BookingsService],
  controllers: [],
})
export class BookingsModule {}
