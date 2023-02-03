import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  data: any;
  error: any;
}

const initialState: InitialState = {
  data: null,
  error: null,
};

const shipment = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    storeData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.error = null;
    },
    storeError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { storeData, storeError } = shipment.actions;
export default shipment.reducer;
