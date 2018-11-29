import React, { Component } from "react";
import { ThemeContext } from "../theme";
import "./Switch.css";

export default class Switch extends Component {
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
    const activeClassName = `switch__slider-ball--${
      active ? "active" : "inactive"
    }`;
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => {
          return (
            <div className="switch">
              <span className="switch__slider">
                <span className={`switch__slider-ball ${activeClassName}`} />
                <input
                  className="switch__slider-input"
                  onChange={this.handleOnChange(toggleTheme)}
                  type="checkbox"
                  checked={active}
                />
              </span>
              <span
                className={`switch__background switch__background--theme-${theme}`}
              />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
