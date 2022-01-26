import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <div className="footer">
      <div className="inner-wrap">
        <nav className="fnb">
          <ul>
            <li>
              <Link to="/privacy">개인정보처리방침</Link>
            </li>
            <li>
              <Link to="/terms">사이트 이용약관</Link>
            </li>
            <li>
              <Link to="/customer">고객센터</Link>
            </li>
          </ul>
        </nav>
        <div className="copyright">copyright</div>
      </div>
    </div>
  );
};

export default AppFooter;
