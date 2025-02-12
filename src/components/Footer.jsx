import React from 'react';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} 오늘 어때요 이지호 제작 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;