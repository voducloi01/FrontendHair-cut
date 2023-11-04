import { useTranslation } from 'react-i18next';
import './ScheduleWrapper.scss';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';
import { DATA_SCHEDULE } from '@/constants/constant';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import HeaderTable from '@/components/admin/atoms/HeaderTable/HeaderTable';
import { COL_SCHEDULE } from '@/type/TableType/table_type';
import { TypeSchedule } from '@/api_type/Schedule';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { useState } from 'react';
import moment from 'moment';
import './ScheduleWrapper.scss';

type PropsSchedule = {
  formik: any;
  handleDateChange: (e: Date | null) => void;
  dataSchedule: TypeSchedule[];
};

const ScheduleWrapper = ({
  formik,
  handleDateChange,
  dataSchedule,
}: PropsSchedule) => {
  const { t } = useTranslation();
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

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
    <div className="schedule__wrapper mx-4">
      <div className="schedule__wrapper__form">
        <h1>{t('schedule.order_schedule')}</h1>
        <form onSubmit={formik.handleSubmit}>
          {DATA_SCHEDULE.map((e) => {
            return (
              <div className="schedule__wrapper__form__input my-4" key={e.id}>
                <span className="schedule__wrapper__form__input__label">
                  {t(`information.${e.value}`)}:
                </span>
                <TextField
                  id={e.value}
                  name={e.value}
                  type={e.type}
                  label={t(`information.${e.value}`)}
                  variant="outlined"
                  fullWidth
                  value={formik.values[e.value] || ''}
                  onChange={formik.handleChange}
                  error={
                    formik.touched[e.value] && Boolean(formik.errors[e.value])
                  }
                  helperText={formik.touched[e.value] && formik.errors[e.value]}
                />
              </div>
            );
          })}
          <div className="schedule__wrapper__form__input my-4">
            <span className="schedule__wrapper__form__input__label">
              {t('information.calendar')}
            </span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={formik.values['dateSchedule'] || null}
                format="DD/MM/YYYY HH:mm:ss"
                label={t('information.calendar')}
                views={['day', 'month', 'year', 'hours', 'minutes']}
                disablePast
                shouldDisableTime={(value: any, view) => {
                  return (
                    (view === 'hours' && value.hour() > 20) || value.hour() < 8
                  );
                }}
                onChange={(e: Date | null) => handleDateChange(e)}
                slotProps={{
                  textField: {
                    variant: 'outlined',
                    error:
                      formik.touched['dateSchedule'] &&
                      Boolean(formik.errors['dateSchedule']),
                    helperText:
                      formik.touched['dateSchedule'] &&
                      formik.errors['dateSchedule'],
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          <div className="schedule__wrapper__form__input__action">
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="success"
            >
              {t('button.create')}
            </Button>
          </div>
        </form>
      </div>
      <div className="schedule__wrapper__list">
        <h1>{t('schedule.list_schedule')}</h1>
        <Paper
          sx={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: 2,
            border: 'none',
            height: '100%',
          }}
        >
          <TableContainer sx={{ maxHeight: 700 }}>
            <Table stickyHeader sx={{ m: 0 }}>
              <HeaderTable columns={COL_SCHEDULE} />
              <TableBody>
                {dataSchedule
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((product, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={product.id.toString()}
                      >
                        {COL_SCHEDULE.map((column) => {
                          const value = product[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              className="table"
                            >
                              {column.id === 'action' ? (
                                <div className="product-wrapper__action__delete">
                                  <DeleteForeverOutlined />
                                </div>
                              ) : column.id === 'id' ? (
                                index + 1
                              ) : column.id === 'dateSchedule' ? (
                                moment(value).format('DD/MM/YYYY HH:mm A')
                              ) : (
                                value
                              )}
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
            count={dataSchedule.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default ScheduleWrapper;
