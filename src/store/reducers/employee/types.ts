import { IEmployeeDTO } from '../../../types/employee';

export interface EmployeesState {
  doctors: IEmployeeDTO[];
  nurses: IEmployeeDTO[];
}
