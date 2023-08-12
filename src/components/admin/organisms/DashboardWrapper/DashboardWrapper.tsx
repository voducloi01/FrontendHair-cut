import { DATA_DASHBOARD, ROUTE_PATH } from '@/constants/constant';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStatesType } from '@/store';
import { useTranslation } from 'react-i18next';
import { updateUser } from '@/store/slices/UserSlice';
import { goTo } from '@/ts/router';
import { useLocation } from 'react-router-dom';
import HederAdmin from '@/components/admin/molecules/HeaderAdmin/HederAdmin';
import './DashboardWrapper.scss';

// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-around',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }));

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = (props: DashboardWrapperProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootStatesType) => state.user);
  // hook location
  const location = useLocation();
  // state router
  const [_, setRouter] = useState(ROUTE_PATH.dashboard);

  // handle click
  const handleNavigate = (router: string) => {
    setRouter(router);
    goTo(router);
  };

  const handleLogout = () => {
    dispatch(
      updateUser({
        name: '',
        email: '',
        token: '',
      }),
    );
    goTo(ROUTE_PATH.login);
  };

  return (
    <div className="dash-board" style={{ display: 'flex', height: '100%' }}>
      <HederAdmin />
      <div className="dash-board__container">
        <div className="admin-wrapper">
          <div className="admin-wrapper__title">Admin</div>
          <div className="admin-wrapper__content">
            <div className="admin-wrapper__content__item__text">
              {DATA_DASHBOARD.map((e) => {
                return (
                  <div
                    key={e.id}
                    className={
                      location.pathname === e.router
                        ? 'admin-wrapper__content__item__text__focus'
                        : 'admin-wrapper__content__item__text__unfocus'
                    }
                    onClick={() => handleNavigate(e.router)}
                  >
                    <e.icon
                      style={{
                        color:
                          location.pathname === e.router ? 'violet' : 'gray',
                      }}
                      fontSize="medium"
                    />
                    <div
                      className={
                        location.pathname === e.router
                          ? 'admin-wrapper__content__item__text__title'
                          : 'admin-wrapper__content__item__text__disable'
                      }
                    >
                      {e.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div {...props} className="dash-board__container__content"></div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
