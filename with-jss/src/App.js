import React, { Component } from "react";
import injectSheet from "react-jss";
import Chat from "./Chat";

const styles = {
  root: {
    position: "absolute",
    height: "100%",
    width: "100%"
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Chat />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
