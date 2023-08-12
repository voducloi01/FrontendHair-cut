import './HeaderAdmin.scss';
import { SettingsOutlined } from '@mui/icons-material';

const HederAdmin = () => {
  return (
    <div className="header-admin">
      <div className="header-admin__toggle">
        <div className="header-admin__toggle__avatar">
          <img
            alt="user-account"
            src="https://www.berrydashboard.io/static/media/user-round.13b5a31bebd2cc6016d6db2cac8e92d1.svg"
          />
        </div>
        <div className="header-admin__toggle__setting">
          <SettingsOutlined />
        </div>
      </div>
    </div>
  );
};

export default HederAdmin;
