import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material';
import './UsersWrapper.scss';
import React from 'react';
import HeaderTable from '../../atoms/HeaderTable/HeaderTable';
import { COL_USERS } from '@/type/TableType/table_type';

interface Data {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: number;
  role: number;
}

function createData(
  id: number,
  name: string,
  email: string,
  age: number,
  phone: number,
  role: number,
): Data {
  return { id, name, email, age, phone, role };
}

const rows = [
  createData(1, 'India', 'IN', 1, 1, 1),
  createData(2, 'TienLD', 'IN', 1, 1, 1),
  createData(3, 'Tien01', 'IN', 1, 1, 1),
  createData(5, 'Tien02', 'IN', 1, 1, 1),
  createData(6, 'Tien03', 'IN', 1, 1, 1),
  createData(7, 'Tien04', 'IN', 1, 1, 1),
  createData(8, 'Tien05', 'IN', 1, 1, 1),
];

const UsersWrapper = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="user-wrapper">
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
          border: 'none',
        }}
      >
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader sx={{ m: 0 }}>
            <HeaderTable columns={COL_USERS} />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id.toString()}
                    >
                      {COL_USERS.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default UsersWrapper;
