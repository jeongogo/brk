import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = ({ user }) => {
  return (
    <div className="header">
      <div className="inner-wrap">
        <div className="top">
          <div className="logo">
            <Link to="/">HOME</Link>
          </div>
          <div className="tnb">
            {user ? (
              <>
                {user.name}님 환영합니다.
                <Link to="/logout">로그아웃</Link>
              </>
            ) : (
              <>
                <Link to="/login">로그인</Link>
                <Link to="/register">회원가입</Link>
              </>
            )}
          </div>
        </div>
        <div className="gnb">
          <ul>
            <li>
              <Link to="/post">Post</Link>
            </li>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
