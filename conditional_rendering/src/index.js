import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  handleLoginClick = () =>{
    this.setState({
      isLoggedIn: true,
    })
  }

  handleLogoutClick = () =>{
    this.setState({
      isLoggedIn: false,
    })
  }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = '';

    //you can write conditional sorter like below

    {isLoggedIn ? 
      button = <LogoutButton onClick={this.handleLogoutClick} /> :
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    // or you can use if like below, but it will longer

    /*
    if (isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }
    */

    console.log('loggin value', isLoggedIn);
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}


function UserGreeting(){
  return <h1> Wellcome Back </h1>;
}

function GuestGreeting(){
  return <h1>Please sign up</h1>;
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <UserGreeting/>
  }
  return <GuestGreeting />
}

function LoginButton(data){
  console.log('login button', data);
  return (
    <button onClick={data.onClick}> Login </button>
  )
}

function LogoutButton(data){
  console.log('logout button', data);
  return(
    <button onClick={data.onClick}>Logout</button>
  )
}

ReactDOM.render(<LoginControl />, document.getElementById('firstdemo'));