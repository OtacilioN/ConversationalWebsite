import React from "react";
import "./App.css";
import Typist from "react-typist";
import PTBRFlag from "./images/ptbr.svg";
import ENFlag from "./images/en.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dividerWidth: "8px",
      renderText: false,
      PTBRDone: false,
      ENDone: false
    };
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({ dividerWidth: "100%", renderText: true }),
      500
    );
  }

  onPTBRDone = () => {
    this.setState({ PTBRDone: true });
  };

  onENDone = () => {
    this.setState({ ENDone: true });
  };

  render() {
    return (
      <div className="App-main">
        {this.state.renderText && (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              <div>
                <h1>
                  {this.state.PTBRDone ? (
                    "Olá, eu sou Otacilio"
                  ) : (
                    <Typist onTypingDone={this.onPTBRDone}>
                      Olá, eu sou Otacilio
                    </Typist>
                  )}
                </h1>
              </div>
              {(this.state.PTBRDone || this.state.ENDone) && (
                <div>
                  <h2>
                    <Typist>Para começar, selecione um idioma</Typist>
                  </h2>
                </div>
              )}
            </div>

            <div style={{ padding: 16 }}>
              <img
                src={PTBRFlag}
                alt="Bandeira do Brasil"
                style={{ width: 80 }}
              />
            </div>
          </div>
        )}
        <div
          style={{ width: this.state.dividerWidth }}
          className="Animated-divider"
        />
        {this.state.renderText && (
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              <div>
                <h1>
                  {this.state.ENDone ? (
                    "Hello, I am Otacilio"
                  ) : (
                    <Typist onTypingDone={this.onENDone}>
                      Hello, I am Otacilio
                    </Typist>
                  )}
                </h1>
              </div>
              {(this.state.ENDone || this.state.PTBRDone) && (
                <div>
                  <h2>
                    <Typist>Select a language to start</Typist>
                  </h2>
                </div>
              )}
            </div>

            <div style={{ padding: 16 }}>
              <img
                src={ENFlag}
                alt="Great Britain Flag"
                style={{ width: 80 }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
