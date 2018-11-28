import React, { Component } from "react";
import "./Input.css";

export default class Input extends Component {
  render() {
    const { onChange, onKeyDown, value } = this.props;
    return (
      <footer className="input">
        <input
          onKeyDown={onKeyDown}
          onChange={onChange}
          className="input__text"
          placeholder="Made with️ 💖 by CSS"
          value={value}
        />
      </footer>
    );
  }
}
