// import { Container } from '@mui/material';
// import LoginWrapper from '@/components/admin/organisms/LoginWrapper/LoginWrapper';
// import { useState, useContext } from 'react';
// import API from '@/services/axiosClient';
// import { useDispatch } from 'react-redux';
// import DialogRegister from '@/components/admin/organisms/DialogRegister/DialogRegister';
// import { AlertDialogContext } from '@/context/AlertDialogContext';
// import { updateUser } from '@/store/slices/UserSlice';
// import { goTo } from '@/ts/router';
// import { ROUTE_PATH } from '@/constants/constant';
// import { LoadingContext } from '@/context/LoadingContext';

// const Login = () => {
//   const preloader = useContext(LoadingContext);
//   const [formLogin, setFormLogin] = useState<{
//     email: string;
//     password: string;
//   }>({ email: '', password: '' });

//   const [formRegister, setFormRegister] = useState<{
//     name: string;
//     email: string;
//     password: string;
//   }>({ name: '', email: '', password: '' });

//   const [isShowRegister, setShowRegister] = useState<boolean>(false);

//   const dispatch = useDispatch();

//   const alertDialog = useContext(AlertDialogContext);

//   // handleChange value login
//   const handleChangeValue = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     fieldName: string,
//   ) => {
//     setFormLogin((prevFormLogin) => ({
//       ...prevFormLogin,
//       [fieldName]: e.target.value,
//     }));
//   };

//   // handleChange value register
//   const onChangeRegister = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     fieldName: string,
//   ) => {
//     setFormRegister((prevFormRegister) => ({
//       ...prevFormRegister,
//       [fieldName]: e.target.value,
//     }));
//   };

//   //handle login form
//   const handleLoginForm = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     try {
//       preloader.show();
//       const response = await API.apiLogin(formLogin);
//       const { token, user } = response.data.data;
//       console.log(response);

//       dispatch(
//         updateUser({
//           email: formLogin.email,
//           name: user?.name,
//           token: token,
//         }),
//       );
//       goTo(ROUTE_PATH.dashboard);
//     } catch (error: any) {
//       alertDialog.show(error.message);
//     } finally {
//       preloader.hidden();
//     }
//   };

//   // handle register form
//   const handleRegisterForm = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     try {
//       preloader.show();
//       await API.apiRegister(formRegister);
//       setShowRegister(false);
//     } catch (error: any) {
//       alertDialog.show(error.response.data.message);
//     } finally {
//       preloader.hidden();
//     }
//   };

//   // Open form register
//   const handleOpenRegister = () => {
//     setShowRegister(true);
//   };

//   return (
//     <Container id="login">
//       <LoginWrapper
//         email={formLogin.email}
//         password={formLogin.password}
//         onChange={handleChangeValue}
//         onClick={handleLoginForm}
//         onClickRegister={handleOpenRegister}
//       />
//       {isShowRegister && (
//         <DialogRegister
//           onRegister={handleRegisterForm}
//           onClose={() => setShowRegister(false)}
//           onChangeRegister={onChangeRegister}
//         />
//       )}
//     </Container>
//   );
// };

// export default Login;
