import React, { Component } from 'react'

export default class extends Component {

constructor (){
	super();
	this.state={
	  count :0,
	};
}
counter=()=>{
  this.setState({
      count: this.state.count + 1,
    });

  };


componentDidMount(){
	let IntervalId=setInterval(this.counter,1000);
}
componentWillUnmount(){
  clearInterval(this.IntervalId);
}

render() {
	return (
	  <div>
	  {this.state.count}
	  </div>
	)
  }
}
