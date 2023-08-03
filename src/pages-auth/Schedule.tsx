import { Page } from 'framework7-react';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import ScheduleWrapper from '@/components/admin/organisms/ScheduleWrapper/ScheduleWrapper';

const Schedule = () => {
  return (
    <Page id="admin-schedule" name="admin-schedule">
      <DashboardWrapper>
        <ScheduleWrapper />
      </DashboardWrapper>
    </Page>
  );
};

export default Schedule;
