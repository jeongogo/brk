import React from 'react';
import { useState, useCallback } from 'react';
import { useMutation } from 'react-query';
import { login } from '../../lib/api/auth';

const LoginContainer = () => {
  const [user, setUser] = useState({
    id: '',
    pw: '',
  });

  const mutation = useMutation((user) => login(user));

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  });

  const onSubmit = () => {
    mutation.mutate(user);
    if (mutation.isSuccess) {
      console.log('success');
    }
  };

  return (
    <div className="login-wrap">
      <div className="form">
        <div className="input-box">
          <label>아이디</label>
          <input
            type="text"
            onChange={handleChange}
            name="id"
            value={user.id || ''}
          />
        </div>
        <div className="input-box">
          <label>비밀번호</label>
          <input
            type="password"
            onChange={handleChange}
            name="pw"
            value={user.pw || ''}
          />
        </div>
        <div className="btn-group">
          <button type="button" className="mint" onClick={onSubmit}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
