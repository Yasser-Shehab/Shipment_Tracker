import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from './shipment';
import languageReducer from './language';

const store = configureStore({
  reducer: { shipment: shipmentReducer, language: languageReducer },
});

export default store;
