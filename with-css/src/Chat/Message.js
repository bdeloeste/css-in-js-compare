import React, { Component } from "react";
import { ThemeContext } from "../theme";
import "./Message.css";

export default class Message extends Component {
  render() {
    const { value } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div className="message">
            <div className={`message__value message__value--theme-${theme}`}>
              {value}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
