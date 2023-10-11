import React, { Component } from "react";
import Car from "./Car";
import { Wrapper } from "./Wrapper";
import { MyHeader } from "./MyHeader";

class MyCars extends Component {
  state = {
    cars: ["Ford", "Mercedes", "Peaugeot"],
  };
  notCopy() {
    alert("Merci de ne pas copie le text");
  }

  addStyle = (e) => {
    console.log(e.target);
    if (e.target.classList.contains("styled")) {
      e.target.classList.remove("styled");
    } else {
      e.target.classList.add("styled");
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>Lorem ipsum</h1>
        <MyHeader
          style={{ color: this.props.color }}
          onMouseOver={this.addStyle}
        >
          {this.props.title}
        </MyHeader>
        <p onCopy={this.notCopy}>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <Car color="red">{this.state.cars[0]}</Car>
        <Car color="black">{this.state.cars[1]}</Car>
        <Car>{this.state.cars[2]}</Car>
        <p>lorem</p>
      </div>
    );
  }
}

export default MyCars;
