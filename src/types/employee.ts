export enum ERoles {
  DOCTOR = 'doctor',
  NURSE = 'nurse',
}

export type TDepartment = 'cardiology' | 'surgery';

export interface IEmployeeDTO {
  id: number;
  fullName: string;
  department: TDepartment;
  role: ERoles;
  isHead?: boolean;
}
