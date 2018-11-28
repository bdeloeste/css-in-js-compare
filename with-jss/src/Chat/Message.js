import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = {
  root: {
    margin: "16px 0 0",
    display: "flex"
  },
  message: {
    backgroundColor: "#d2e3fc",
    boxSizing: "border-box",
    padding: "10px 12px",
    color: "#174ea6",
    maxWidth: "calc(70% - 40px)",
    borderRadius: "24px",
    wordWrap: "break-word"
  }
};

class Message extends Component {
  render() {
    const { classes, value } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.message}>{value}</div>
      </div>
    );
  }
}

export default injectSheet(styles)(Message);
