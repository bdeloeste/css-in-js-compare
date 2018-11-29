import React, { Component } from "react";
import injectSheet, { ThemeProvider } from "react-jss";
import themes from "./theme";
import Chat from "./Chat";

const styles = {
  root: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  primary: {
    backgroundColor: themes.primary.light
  },
  secondary: {
    backgroundColor: themes.secondary.light
  }
};

class App extends Component {
  state = {
    color: "primary"
  };

  toggleTheme = () => {
    this.setState(prevState => ({
      color: prevState.color === "primary" ? "secondary" : "primary"
    }));
  };

  render() {
    const { classes } = this.props;
    const { color } = this.state;
    const themeColor =
      color === "primary" ? classes.primary : classes.secondary;
    return (
      <ThemeProvider
        theme={{ color: themes[color], toggleTheme: this.toggleTheme }}
      >
        <div className={`${classes.root} ${themeColor}`}>
          <Chat />
        </div>
      </ThemeProvider>
    );
  }
}

export default injectSheet(styles)(App);
