import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "student";

export const PaymentTitle = (record: TPayment): string => {
  return record.student?.toString() || String(record.id);
};
