import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  data: any;
}

const initialState: InitialState = {
  data: null,
};

const shipment = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    storeData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { storeData } = shipment.actions;
export default shipment.reducer;
