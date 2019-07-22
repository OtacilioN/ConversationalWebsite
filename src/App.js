import React from "react";
import "./App.css";
import Typist from "react-typist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dividerWidth: "8px",
      renderText: false
    };
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({ dividerWidth: "100%", renderText: true }),
      500
    );
  }

  render() {
    return (
      <div className="App-main">
        {this.state.renderText && (
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <Typist>
              <span style={{ color: "white" }}>Olá, eu sou Otacilio</span>
            </Typist>
          </div>
        )}
        <div
          style={{ width: this.state.dividerWidth }}
          className="Animated-divider"
        />
        {this.state.renderText && (
          <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
            <Typist>
              <span style={{ color: "white" }}>Hello, I am Otacilio</span>
            </Typist>
          </div>
        )}
      </div>
    );
  }
}

export default App;
