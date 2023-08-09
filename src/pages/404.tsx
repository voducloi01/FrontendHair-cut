import { Container } from '@mui/material';
import NotFoundWrapper from '@/components/organisms/NotFoundWrapper/NotFoundWrapper';

const NotFoundPage = () => {
  return (
    <Container id="not-found">
      <NotFoundWrapper onClickGoHome={() => null} />
    </Container>
  );
};

export default NotFoundPage;
