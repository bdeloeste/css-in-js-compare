import React, { Component } from "react";
import "./Message.css";

export default class Message extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="message">
        <div className="message__value">{value}</div>
      </div>
    );
  }
}
