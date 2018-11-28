import React, { Component } from "react";
import ChatBox from "./Chatbox";
import Input from "./Input";
import "./index.css";

export default class Chat extends Component {
  state = {
    messages: [],
    value: ""
  };

  handleOnKeyDown = e => {
    const { messages, value } = this.state;
    if (e.keyCode === 13 && value.length > 0) {
      messages.push(value);
      console.log(messages);
      this.setState({ messages, value: "" });
    }
  };

  handleOnChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { messages, value } = this.state;
    return (
      <div className="chat">
        <ChatBox messages={messages} />
        <Input
          onKeyDown={this.handleOnKeyDown}
          onChange={this.handleOnChange}
          value={value}
        />
      </div>
    );
  }
}
