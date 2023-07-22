import { Page, f7 } from 'framework7-react';
import { ROUTE_PATH } from '@/constants/constant';
import NotFoundWrapper from '@/components/organisms/NotFoundWrapper/NotFoundWrapper';

const NotFoundPage = () => {
  const handleGoHome = () => {
    f7.views.main.router.back(ROUTE_PATH.index);
  };

  return (
    <Page id="not-found" name="not-found" pageContent={false}>
      <NotFoundWrapper onClickGoHome={handleGoHome} />
    </Page>
  );
};

export default NotFoundPage;
