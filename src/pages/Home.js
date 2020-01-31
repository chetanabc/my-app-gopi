import React from 'react';
import {Link} from 'react-router-dom';


export default function Home() {
  const [state, changeState] = React.useState({
    username:'chatan'
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


