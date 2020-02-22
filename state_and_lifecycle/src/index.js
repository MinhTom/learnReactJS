import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function Formatdate(props){
  return (
    <h2>
      Its is {props.date.toLocaleString()}
    </h2>
  )
}

function TreeApp() {
  return (
    <div>
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    <Clock />
    </div>
  )
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h1>Hello, ReactJS !!!</h1>
        <Formatdate date = {this.state.date}/>
      </div>
    )
  }
}

ReactDOM.render(<TreeApp />, document.getElementById('firstdemo'));
  
serviceWorker.unregister();
