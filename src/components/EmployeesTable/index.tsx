import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';

import { RootState } from '../../store';
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
} from '../../store/reducers/employee';
import { ERoles, IEmployeeDTO, TDepartment } from '../../types/employee';

import { TABLE_CELLS } from './constants';
import { IEmployeesTableProps } from './types';

export const EmployeesTable: React.FC<IEmployeesTableProps> = props => {
  const { role } = props;

  const employees = useSelector((state: RootState) =>
    role === ERoles.DOCTOR ? state.employees.doctors : state.employees.nurses
  );
  const dispatch = useDispatch();

  const [editId, setEditId] = useState<number | null>(null);
  const [editFullName, setEditFullName] = useState<string>('');
  const [editDepartment, setEditDepartment] =
    useState<TDepartment>('cardiology');

  const [newFullName, setNewFullName] = useState<string>('');
  const [newDepartment, setNewDepartment] = useState<TDepartment>('cardiology');

  const handleDelete = (id: number) => {
    dispatch(deleteEmployee({ id, role }));
  };

  const handleEditClick = (employee: IEmployeeDTO) => {
    setEditId(employee.id);
    setEditFullName(employee.fullName);
    setEditDepartment(employee.department);
  };

  const handleSaveEdit = () => {
    if (editId !== null) {
      const updatedEmployee: IEmployeeDTO = {
        id: editId,
        fullName: editFullName,
        department: editDepartment,
        role,
      };

      dispatch(editEmployee(updatedEmployee));

      setEditId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  const handleAddEmployee = () => {
    if (newFullName.trim()) {
      const newEmployee: IEmployeeDTO = {
        id: Date.now(),
        fullName: newFullName,
        department: newDepartment,
        role,
      };

      dispatch(addEmployee(newEmployee));

      setNewFullName('');
      setNewDepartment('cardiology');
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {TABLE_CELLS.map(tableCell => (
              <TableCell key={tableCell}>{tableCell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(employee => {
            const { id, fullName, department } = employee;

            const isEditing = editId === id;

            return (
              <TableRow key={id}>
                <TableCell>
                  {isEditing ? (
                    <TextField
                      value={editFullName}
                      onChange={e => setEditFullName(e.target.value)}
                    />
                  ) : (
                    fullName
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <Select
                      value={editDepartment}
                      onChange={e =>
                        setEditDepartment(e.target.value as TDepartment)
                      }
                    >
                      <MenuItem value="cardiology">Cardiology</MenuItem>
                      <MenuItem value="surgery">Surgery</MenuItem>
                    </Select>
                  ) : (
                    department
                  )}
                </TableCell>
                <TableCell>
                  {isEditing ? (
                    <>
                      <Button color="primary" onClick={handleSaveEdit}>
                        Save
                      </Button>
                      <Button color="secondary" onClick={handleCancelEdit}>
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        color="primary"
                        onClick={() => handleEditClick(employee)}
                      >
                        Edit
                      </Button>
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(id)}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <TableCell>
              <TextField
                placeholder="Full Name"
                value={newFullName}
                onChange={e => setNewFullName(e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Select
                value={newDepartment}
                onChange={e => setNewDepartment(e.target.value as TDepartment)}
                sx={{ width: '200px' }}
              >
                <MenuItem value="cardiology">Cardiology</MenuItem>
                <MenuItem value="surgery">Surgery</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Button color="primary" onClick={handleAddEmployee}>
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
