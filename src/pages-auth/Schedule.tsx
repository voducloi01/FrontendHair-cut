import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import ScheduleWrapper from '@/components/admin/organisms/ScheduleWrapper/ScheduleWrapper';

const Schedule = () => {
  return (
    <Container id="schedule">
      <DashboardWrapper>
        <ScheduleWrapper />
      </DashboardWrapper>
    </Container>
  );
};

export default Schedule;
