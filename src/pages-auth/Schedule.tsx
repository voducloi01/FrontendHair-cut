import { Page } from 'framework7-react';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import SchduleWrapper from '@/components/admin/organisms/ScheduleWrapper/SchduleWrapper';

const Schedule = () => {
  return (
    <Page id="schedule" name="schedule-auth">
      <DashboardWrapper>
        <SchduleWrapper/>
      </DashboardWrapper>
    </Page>
  );
};

export default Schedule;
