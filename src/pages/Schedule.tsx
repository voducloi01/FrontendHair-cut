import { ParamSchedule, TypeSchedule } from '@/api_type/Schedule';
import Footer from '@/components/atoms/Footer/Footer';
import Header from '@/components/atoms/Header/Header';
import ScheduleWrapper from '@/components/organisms/ScheduleUserWrapper/ScheduleWrapper';
import { validationSchedule } from '@/validations/schedule_valdation';
import { Container } from '@mui/material';
import { useFormik } from 'formik';
import API from '@/services/axiosClient';
import { useContext, useEffect, useState } from 'react';
import { LoadingContext } from '@/context/LoadingContext';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';

const Schedule = () => {
  const [dataSchedule, setDataSchedule] = useState<TypeSchedule[]>([]);
  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);

  useEffect(() => {
    getAllSchedule();
  }, []);

  const formikSchedule = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      dateSchedule: null,
    },
    validationSchema: validationSchedule,
    onSubmit: (values: ParamSchedule) => HandleCreateSchedule(values),
  });

  const handleChangeSchedule = (date: Date | null) => {
    formikSchedule.setFieldValue('dateSchedule', date);
  };

  const HandleCreateSchedule = async (value: ParamSchedule) => {
    try {
      preloader.show();
      const res = await API.apiCreateSchedule({
        ...value,
        phone: value.phone.toString(),
      });
      const { message } = res.data;
      alertDialog.show(message, true);
      getAllSchedule();
      formikSchedule.resetForm();
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  const getAllSchedule = async () => {
    try {
      preloader.show();
      const res = await API.apiGetAllSchedule();
      const { result } = res.data;
      setDataSchedule(result);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  const handleAgreeDelete = async (idSchedule: number) => {
    try {
      preloader.show();
      const res = await API.apiDeleteSchedule(idSchedule);
      const { message } = res.data;
      getAllSchedule();
      alertDialog.show(message, true);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  return (
    <Container id="schedule__user">
      <Header />
      <ScheduleWrapper
        dataSchedule={dataSchedule}
        formik={formikSchedule}
        handleDateChange={handleChangeSchedule}
        handleAgreeDelete={(id) => handleAgreeDelete(id)}
      />
      <Footer />
    </Container>
  );
};

export default Schedule;
