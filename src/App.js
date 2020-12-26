import React from 'react';
// import logo from './logo.svg';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import './App.css';
// import Home from './pages/Home';
// import Aboutus from './pages/Aboutus';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>

          <DefaultLaoutt path="/"  exact component={Home} />

          <AdminLaoutt path="/about-us"  component={Aboutus} />
          {/* <Route path="/about-us" component={Aboutus} /> */}
      </Switch>
    </BrowserRouter>

    
  );
}
export default App;


const DefaultLaoutt = (props)=>{

  const {component:Component, ...rest} = props;
  
  return(
  
    <Route {...rest}  render={()=>{

      return(
      <React.Fragment> 
        <div> //header </div>
        <Component  />
        <div>//footer</div>
      </React.Fragment>
      )
    }} />
  )

} 

const AdminLaoutt = (props)=>{

  const {component:Component, ...rest} = props;
  
  return(
  
    <Route {...rest}  render={()=>{

      return(
      <React.Fragment> 
        <div> //header Admin </div>
        <Component  />
        <div>//footer</div>
      </React.Fragment>
      )
    }} />
  )

} 


 function Home() {
  const [state, changeState] = React.useState({
    username:'Homepage'
  })
  return (
    <div className="App">
      <Link  to="/" >homepage</Link>  ---     
        <Link  to="/about-us" >About us</Link>
      <div>-------</div>
     <h1> {state.username}</h1>

      <div onClick={()=>{changeState({username:'no this is gopi'})}}>click me</div>
    </div>
  );
}

function Aboutus() {
  const [state, changeState] = React.useState({
    username:'About Us'
  })
  return (
    <div className="App">
        <Link  to="/" >homepage</Link>  ---     
        <Link  to="/about-us" >About us</Link>
      <div>-------</div>

      <h1> {state.username}</h1>

      <div onClick={()=>{changeState({username:'no this is gopi'})}}>click me</div>
    </div>
  );
}
