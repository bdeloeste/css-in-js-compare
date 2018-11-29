import React, { Component } from "react";
import injectSheet, { withTheme } from "react-jss";

const styles = theme => ({
  root: {
    width: "48px",
    display: "inline-flex",
    verticalAlign: "middle",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer"
  },
  background: {
    backgroundColor: theme.color.dark,
    opacity: 0.5,
    top: "50%",
    left: "50%",
    width: "34px",
    height: "14px",
    borderRadius: "7px",
    marginLeft: "-17px",
    marginTop: "-7px",
    position: "absolute"
  },
  slider: {
    width: "100%",
    display: "flex"
  },
  ball: {
    boxShadow:
      "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
    borderRadius: "50%",
    backgroundColor: "white",
    cursor: "inherit",
    width: "20px",
    height: "20px",
    zIndex: 1,
    transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  input: {
    cursor: "inherit",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    margin: 0,
    opacity: 0,
    padding: 0,
    position: "absolute",
    zIndex: 2
  },
  active: {
    transform: "translateX(24px)"
  }
});

class Switch extends Component {
  state = {
    active: false
  };

  handleOnChange = cb => () => {
    this.setState(
      prevState => {
        return { active: !prevState.active };
      },
      () => {
        cb();
      }
    );
  };

  render() {
    const { active } = this.state;
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <span className={classes.slider}>
          <span className={`${classes.ball} ${active && classes.active}`} />
          <input
            className={classes.input}
            onChange={this.handleOnChange(theme.toggleTheme)}
            type="checkbox"
            checked={active}
          />
        </span>
        <span className={classes.background} />
      </div>
    );
  }
}

export default injectSheet(styles)(withTheme(Switch));
