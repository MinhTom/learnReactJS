import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }

    // this binding is necessary to make 'this' work in the call back
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () =>{
    console.log('this is your resulf', this.state.isToggleOn)
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  handleLoginEvent(){
    console.log('this is', this);
  }

  render () {
    return(
      <div>
        {/* ex1 */}
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "on" : "off"}
      </button>
      {/* ex2 */}
      <button onClick={(e) => this.handleLoginEvent()}>
        Click Me !!!
      </button>
      </div>
    )
  }
}

ReactDOM.render(<Toggle />, document.getElementById('firstdemo'));