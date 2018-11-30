import React, { Component } from "react";
import injectSheet from "react-jss";

const styles = theme => ({
  root: {
    margin: "14px 0 0",
    display: "flex"
  },
  message: {
    backgroundColor: theme.color.light,
    boxSizing: "border-box",
    padding: "10px 12px",
    color: theme.color.dark,
    maxWidth: "calc(70% - 40px)",
    borderRadius: "24px",
    wordWrap: "break-word"
  }
});

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
