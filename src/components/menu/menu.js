import React from 'react';
//import { Link } from 'react-router-dom';

import Link from "../link/link";


const Menu = () => (
  <div>
       <Link className="link" to="/home">
       Home 
    </Link>
    <Link className="link" to="/a">
     ParentA
    </Link>
    <Link className="link" to="/b">
      ParentB
    </Link>
       <Link className="link" to="/home/a">
      Child Home A
    </Link>
    <Link className="link" to="/home/b">
      Child Home B
    </Link>
    <Link className="link" to="/a/a">
      Child A A
    </Link>
    <Link className="link" to="/a/b">
      Child A B
    </Link>
    <Link className="link" to="/a/a">
      Child B A
    </Link>
    <Link className="link" to="/a/b">
      Child B B
    </Link>
  </div>
);

export default Menu;