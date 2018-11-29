import React, { Component } from "react";
import { ThemeContext, themes } from "./theme";
import Chat from "./Chat";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: themes.primary,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme:
        prevState.theme === themes.primary ? themes.secondary : themes.primary
    }));
  };

  render() {
    const { theme } = this.state;
    const themeClassName = `app--${theme}`;
    return (
      <div className={`app ${themeClassName}`}>
        <ThemeContext.Provider value={this.state}>
          <Chat />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
