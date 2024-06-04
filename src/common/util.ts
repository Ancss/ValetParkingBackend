export const toTitleCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, ' $1') // insert a space before all capital letters
    .replace(/^./, function (str) {
      return str.toUpperCase();
    }); // uppercase the first character
};
export type TotalPrice = {
  parkingCharge: number;
  valetChargeDropoff: number;
  valetChargePickup: number;
};
export const generateSixDigitNumber = () => {
  return Math.floor(Math.random() * 900000) + 100000;
};
