import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__icons">
          <a href="https://github.com/mongru" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="github" size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/monika-grubizna/" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="linkedin" size="lg" />
          </a>
          <a href="https://codepen.io/mongru/" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="codepen" size="lg" />
          </a>
          <a href="https://www.behance.net/chmurensowa" target="_blank" rel="noopener noreferrer">
            <FontAwesome className="footer__icon" name="behance" size="lg" />
          </a>
        </div>
        <div className="footer__copy">
          <p>designed and developed with <span role="img" aria-label="delight">😊</span> by Monika Grubizna</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
