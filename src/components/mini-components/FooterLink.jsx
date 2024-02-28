import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({children,to}) => {
  return (
    <Link to={to} className='tracking-tighter text-white text-sm'>{children}</Link>
  )
}

export default FooterLink