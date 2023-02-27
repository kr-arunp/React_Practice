import React, { Component } from "react";

export default class Child_Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Input: "",
    };
    this.ChangeHandler = this.ChangeHandler.bind(this);
    this.KeyEnterHandler = this.KeyEnterHandler.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
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
    this.props.ChildColor(this.state.Input)
    this.setState({
      Input:''
    })
  }
  render(props) {
    return (
      <>
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
            borderRadius: "2.4rem",
              backgroundColor: this.props.color,
              width: "50%",
              height: "50vh",
              border: "1px solid black",
              padding: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{this.props.color}</h1>
          </div>
        </div>
        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <h1>from Child to Parent in Class Component</h1>
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
      </>
    );
  }
}
