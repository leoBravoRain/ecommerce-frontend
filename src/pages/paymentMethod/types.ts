export type PaymentMethodType = {
  nameOnCard: string;
  cardNumber: string;
  expMonth: string;
  expDay: string;
  cvv: string;
};

export type PaymentFormType = PaymentMethodType;
