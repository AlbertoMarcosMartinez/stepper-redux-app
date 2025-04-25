import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  name: string;
  email: string;
  phone: string;
  plan: string;
  payment: {
    cardNumber: string;
    expiry: string;
    cvc: string;
  };
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  plan: '',
  payment: {
    cardNumber: '',
    expiry: '',
    cvc: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: keyof FormState; value: any }>) => {
      const { field, value } = action.payload;
      (state as any)[field] = value;
    },
    updatePayment: (
      state,
      action: PayloadAction<{ field: keyof FormState['payment']; value: string }>
    ) => {
      const { field, value } = action.payload;
      state.payment[field] = value;
    },
  },
});

export const { updateField, updatePayment } = formSlice.actions;
export default formSlice.reducer;
