import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__icons">
          <a href="https://github.com/mongru" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="github" size="1x" />
          </a>
          <a href="https://www.linkedin.com/in/monika-grubizna/" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="linkedin" size="1x" />
          </a>
          <a href="https://codepen.io/mongru/" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="codepen" size="1x" />
          </a>
          <a href="https://www.behance.net/chmurensowa" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="behance" size="1x" />
          </a>
        </div>
        <div className="footer__copy">
          <p>designed and developed with <span>😊</span> by Monika Grubizna</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
