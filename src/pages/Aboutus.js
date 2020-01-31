import React from 'react';
import {Link} from 'react-router-dom';

export default function Aboutus() {
  const [state, changeState] = React.useState({
    username:'About Us'
  })
  return (
    <div className="App">
        <Link  to="/" >homepage</Link>  ---     
        <Link  to="/about-us" >About us</Link>
      <div>-------</div>

      {state.username}

      <div onClick={()=>{changeState({username:'no this is gopi'})}}>click me</div>
    </div>
  );
}

export function Hello() {
  const [state, changeState] = React.useState({
    username:'About Us'
  })
  return (
    <div className="App">
        <Link  to="/" >homepage</Link>  ---     
        <Link  to="/about-us" >About us</Link>
      <div>-------</div>
    <h1>Hello</h1>
      {state.username}

      <div onClick={()=>{changeState({username:'no this is gopi'})}}>click me</div>
    </div>
  );
}


