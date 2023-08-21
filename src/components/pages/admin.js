import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h1>this is Admin</h1>
      <Link to='/home'>Home</Link>
      <br />
      <NavLink to='/admin'>NavLink</NavLink>
      <br />
      <NavLink to='/home'>NavLink2</NavLink>
      <br />
      <NavLink to='/error'>NavLink3</NavLink>
    </div>
  );
}

export default Admin;
