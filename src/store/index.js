import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from './shipment';

const store = configureStore({
  reducer: { shipment: shipmentReducer },
});

export default store;
