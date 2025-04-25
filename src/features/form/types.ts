export interface PaymentInfo {
    cardNumber: string;
    expiry: string;
    cvc: string;
  }
  
  export interface FormState {
    name: string;
    email: string;
    phone: string;
    plan: string;
    payment: PaymentInfo;
  }
  