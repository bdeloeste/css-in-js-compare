import React, { Component } from "react";
import injectSheet from "react-jss";
import ChatBox from "./Chatbox";
import Input from "./Input";

const styles = {
  root: {
    borderRadius: "3px",
    boxShadow:
      "0 1px 1px 0 rgba(0, 0, 0, 0.06), 0 2px 5px 0 rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    position: "relative",
    width: "600px",
    top: "100px",
    height: "calc(100% - 200px)"
  }
};

class Chat extends Component {
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
    const { classes } = this.props;
    const { messages, value } = this.state;
    return (
      <div className={classes.root}>
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

export default injectSheet(styles)(Chat);
