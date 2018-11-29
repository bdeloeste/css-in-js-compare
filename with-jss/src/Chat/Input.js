import React, { Component } from "react";
import injectSheet from "react-jss";
import Switch from "./Switch";

const styles = {
  root: {
    backgroundColor: "#efefef",
    display: "flex",
    minHeight: "62px",
    order: 2,
    boxSizing: "border-box",
    padding: "5px 10px"
  },
  text: {
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: "21px",
    borderStyle: "solid",
    padding: "9px 12px",
    outline: "none",
    margin: "5px 10px",
    width: "100%",
    "&::placeholder": {
      color: "#a4a4a4"
    }
  }
};

class Input extends Component {
  render() {
    const { classes, onChange, onKeyDown, value } = this.props;
    return (
      <footer className={classes.root}>
        <input
          onKeyDown={onKeyDown}
          onChange={onChange}
          className={classes.text}
          placeholder="Made with️ 💖 by JSS"
          value={value}
        />
        <Switch />
      </footer>
    );
  }
}

export default injectSheet(styles)(Input);
