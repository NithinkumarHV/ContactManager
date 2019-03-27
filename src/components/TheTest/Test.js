import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
