import React, { Component } from "react";
import injectSheet from "react-jss";
import Message from "./Message";

const styles = {
  root: {
    backgroundColor: "white",
    flex: "1 1 0",
    order: 1
  },
  scrollableContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    height: "calc(100% - 62px)",
    width: "100%",
    position: "absolute",
    overflow: "auto"
  },
  messages: {
    margin: "10px"
  }
};

class Chatbox extends Component {
  render() {
    const { classes, messages } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.scrollableContainer}>
          <div className={classes.messages}>
            {messages.map((message, index) => {
              return <Message key={index.toString()} value={message} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Chatbox);
