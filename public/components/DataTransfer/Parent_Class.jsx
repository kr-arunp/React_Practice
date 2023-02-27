import React, { Component } from 'react'
import Child_Class from "./Child_Class";

export default class Parent_Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childColor: "red",
      ParentColor: "green",
      Input: "",
    };
    this.ChangeHandler = this.ChangeHandler.bind(this);
    this.KeyEnterHandler = this.KeyEnterHandler.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
    this.getDataFromChild = this.getDataFromChild.bind(this);
  }
  KeyEnterHandler(e) {
    if (e.keyCode === 13) {
      this.ClickHandler();
    }
  }
  ChangeHandler(e) {
    this.setState({
      Input: e.target.value,
    });
  }

  ClickHandler() {
    this.setState({
      ParentColor: this.state.Input,
      Input:''
    });
    
  }
  getDataFromChild(ChildColor) {
    this.setState({
      childColor:ChildColor,
    },()=>console.log(this.state.childColor));
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          from Parent to Child in Class Component
        </h1>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "16vh",
            display: "flex",
            margin: "12px",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <input
            placeholder="Color Name"
            type="text"
            value={this.state.Input}
            onChange={(e) => this.ChangeHandler(e)}
            onKeyDown={(e) => this.KeyEnterHandler(e)}
            className="Input-Element"
          />
          <button onClick={this.ClickHandler}>Change Color</button>
        </div>
        {/* <Child_Class color={this.state.ParentColor} /> */}

        <Child_Class
          color={this.state.ParentColor}
          ChildColor={this.getDataFromChild}
        />

        {/* Code for sending data from Child to Parent */}
        <div
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              backgroundColor: this.state.childColor,
              width: "50%",
              borderRadius: "2.4rem",
              height: "50vh",
              border: "1px solid black",
              padding: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{this.state.childColor}</h1>
          </div>
        </div>
      </>
    );
  }
}
