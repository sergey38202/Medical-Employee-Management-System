import { createSlice } from '@reduxjs/toolkit';

import doctorsData from '../../../data/doctors.json';
import nursesData from '../../../data/nurses.json';
import {
  addEmployeeAction,
  deleteEmployeeAction,
  editEmployeeAction,
} from '../../actions/employee';

import { EMPLOYEE_REDUCER_NAME } from './constants';
import { EmployeesState } from './types';

const initialState: EmployeesState = {
  doctors: doctorsData,
  nurses: nursesData,
};

const employeesSlice = createSlice({
  name: EMPLOYEE_REDUCER_NAME,
  initialState,
  reducers: {
    addEmployee: addEmployeeAction,
    editEmployee: editEmployeeAction,
    deleteEmployee: deleteEmployeeAction,
  },
});

export const { addEmployee, editEmployee, deleteEmployee } =
  employeesSlice.actions;
export default employeesSlice.reducer;
