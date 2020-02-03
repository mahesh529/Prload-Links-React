import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

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
       <ReactLink className="link" to="/home/a">
      Child Home A
    </ReactLink>
    <ReactLink className="link" to="/home/b">
      Child Home B
    </ReactLink>
    <ReactLink className="link" to="/a/a">
      Child A A
    </ReactLink>
    <ReactLink className="link" to="/a/b">
      Child A B
    </ReactLink>
    <ReactLink className="link" to="/a/a">
      Child B A
    </ReactLink>
    <Link className="link" to="/a/b">
      Child B B
    </Link>
  </div>
);

export default Menu;