import React, { Component } from "react";
import Message from "./Message";
import "./Chatbox.css";

export default class Chatbox extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="chatbox">
        <div className="chatbox__scrollable-container">
          <div className="chatbox__messages">
            {messages.map((message, index) => {
              return <Message key={index.toString()} value={message} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
