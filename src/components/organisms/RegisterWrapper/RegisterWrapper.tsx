import { useState } from 'react';
import axios from 'axios';
import './RegisterWrapper.scss';
import { ENV } from '../../../constants/constant';

const RegisterWrapper = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    if (type === 'Name') {
      setUserName(e.target.value);
    } else if (type === 'Email') {
      setEmail(e.target.value);
    } else {
      setPassWord(e.target.value);
    }
  };

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const userData = {
      name: userName,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${ENV.host}/users/register`, userData);
      if (response.status === 201) {
        setUserName('');
        setEmail('');
        setPassWord('');
        alert('Đăng ký Thành Công !');
      } else {
        alert('Thất Bại!');
      }
    } catch (error) {
      alert('Thất Bại!');
    }
  };

  const inputData = [
    {
      id: 1,
      type: 'text',
      title: 'Name',
      placeholder: 'Nhập Name của bạn',
    },
    {
      id: 2,
      type: 'text',
      title: 'Email',
      placeholder: 'Nhập email của bạn',
    },
    {
      id: 3,
      type: 'password',
      title: 'Password',
      placeholder: 'Nhập password của bạn',
    },
  ];

  return (
    <div className="register-box">
      <div>Register</div>
      <form onSubmit={handleRegister}>
        {inputData.map((e) => (
          <div className="user-box" key={e.id}>
            <label>{e.title}</label>
            <input
              type={e.type}
              autoComplete={e.title}
              onChange={(v) => handleChange(v, e.title)}
              placeholder={e.placeholder}
            />
          </div>
        ))}
        <button className="custom_button" type="submit">
          Đăng Ký
        </button>
      </form>
    </div>
  );
};

export default RegisterWrapper;
