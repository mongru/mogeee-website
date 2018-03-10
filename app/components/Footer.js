import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__icons">
          <FontAwesome className="footer__icon" name="github" size="1x" />
          <FontAwesome className="footer__icon" name="linkedin" size="1x" />
          <FontAwesome className="footer__icon" name="codepen" size="1x" />
        </div>
        <div className="footer__btn-box">
          <button className="footer__btn" type="submit" name="button">go go go</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
