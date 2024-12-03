import { configureStore } from '@reduxjs/toolkit';

import EmployeeReducer from './reducers/employee';

export const store = configureStore({
  reducer: {
    employees: EmployeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
