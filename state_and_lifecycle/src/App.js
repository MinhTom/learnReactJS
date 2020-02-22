import React from 'react';
import './App.css';

function formatDate(date) {
  var options = { year: "numeric", month: "numeric", day: "numeric" }; 
  return date.toLocaleDateString( date, options );
}

function Avatar(props){
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props){
  return (
    <div className='UserInfo'>
      <Avatar user={props.user}/>
        <div className='UserInfor-Name'>
            {props.user.name}
          </div>
      </div>
  );
}

function App(props) {
  return (
    <div className='content'>
        <UserInfo user={props.author} />
        <div className='Comment-text'>
          {props.text}
        </div>
        <div>
          {formatDate(props.date)}
        </div>
    </div>
  );
}

//--------------------------------------------- end ------------------------------------------

export default  Clock;