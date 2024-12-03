import { PayloadAction } from '@reduxjs/toolkit';

import { ERoles, IEmployeeDTO } from '../../../types/employee';

export const addEmployeeAction = (
  state: any,
  action: PayloadAction<IEmployeeDTO>
) => {
  if (action.payload.role === ERoles.DOCTOR) {
    state.doctors.push(action.payload);
  } else {
    state.nurses.push(action.payload);
  }
};

export const editEmployeeAction = (
  state: any,
  action: PayloadAction<IEmployeeDTO>
) => {
  const { id, role } = action.payload;
  const list = role === ERoles.DOCTOR ? state.doctors : state.nurses;
  const index = list.findIndex((emp: IEmployeeDTO) => emp.id === id);

  if (index !== -1) list[index] = action.payload;
};

export const deleteEmployeeAction = (
  state: any,
  action: PayloadAction<{ id: number; role: ERoles }>
) => {
  const { id, role } = action.payload;
  if (role === ERoles.DOCTOR) {
    state.doctors = state.doctors.filter((doc: IEmployeeDTO) => doc.id !== id);
  } else {
    state.nurses = state.nurses.filter(
      (nurse: IEmployeeDTO) => nurse.id !== id
    );
  }
};
