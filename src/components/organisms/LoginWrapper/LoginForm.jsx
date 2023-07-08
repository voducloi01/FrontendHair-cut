import React, { useState } from 'react';
import { ENV } from '../../../constants/constant';
import axios from 'axios';
import { f7 } from 'framework7-react';
import './LoginForm.scss';

const LoginWrapper = () => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const handleChange = (e, type) => {
    if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'pass') setPassWord(e.target.value);
    else {
      return null;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${ENV.host}/users/login`, userData);
      if (response.status === 201) {
        alert('Đăng nhập Thành Công !');
        localStorage.setItem('token', response.data.data?.token);
        f7.view.main.router.navigate('/');
      } else {
        alert('Thất Bại!');
      }
    } catch (error) {
      alert('Thất Bại!');
    }
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="user-box">
          <label>Username</label>
          <input
            type="text"
            name="current-user"
            autoComplete="current-user"
            required=""
            onChange={(e) => handleChange(e, 'email')}
            placeholder="UserName"
          />
        </div>
        <div className="user-box">
          <label>Password</label>
          <input
            type="password"
            name="current-password"
            autoComplete="current-password"
            onChange={(e) => handleChange(e, 'pass')}
            placeholder="PassWord"
          />
        </div>
        <button className="custom_button" type="submit">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
};

export default LoginWrapper;
