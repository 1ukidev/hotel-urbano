import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Contato</Link>
        </li>
        <li>
          <Link to="#0">Termos de uso</Link>
        </li>
        <li>
          <Link to="#0">Trabalhe conosco</Link>
        </li>
        <li>
          <Link to="#0">Suporte</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;