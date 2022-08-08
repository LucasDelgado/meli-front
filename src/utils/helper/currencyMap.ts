import { CurrencyEnum } from "../../models/enum/CurrencyEnum";

export const currencyMap = (currency: keyof typeof CurrencyEnum): string =>
  CurrencyEnum[currency] || "$";
