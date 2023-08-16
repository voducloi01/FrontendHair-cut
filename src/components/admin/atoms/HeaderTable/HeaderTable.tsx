import { TableHead, TableRow, TableCell } from '@mui/material';
import { ColumnUser, ColumnProduct } from '@/type/TableType/table_type';

interface HeaderTableProps {
  columns: readonly ColumnUser[] | ColumnProduct[];
}

const HeaderTable = ({ columns }: HeaderTableProps) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => {
          return (
            <TableCell
              key={column.id}
              align={column.align || 'left'}
              style={{ minWidth: column.minWidth || 100 }}
            >
              {column.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default HeaderTable;
