import { TotalPrice } from 'src/common/util';
import { CreateBookingInput } from 'src/bookings/dtos/create-booking.input';

export class CreateStripeDto {
  uid: string;
  totalPriceObj: TotalPrice;
  bookingData: CreateBookingInput;
}
