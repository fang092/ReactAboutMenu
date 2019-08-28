import React from "react";
import "./styles/Button.css";

class aboutMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true,
      showButton2: false,
      showButton3: false,
      showButton4: false
    };
  }

  toggle = () => {
    this.setState({
      showButton: true,
      showButton2: false,
      showButton3: false,
      showButton4: false
    });
  };

  toggle2 = () => {
    this.setState({
      showButton: false,
      showButton2: true,
      showButton3: false,
      showButton4: false
    });
  };
  toggle3 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: true,
      showButton4: false
    });
  };

  toggle4 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false,
      showButton4: true
    });
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "450px",
          backgroundColor: "purple"
        }}
      >
        <div
          style={{
            width: "30%",
            backgroundColor: "yellow",
            float: "left",
            height: "inherit"
          }}
        >
          Hi
        </div>

        <div
          className="aboutmenu"
          style={{
            backgroundColor: "cyan",
            width: "55%",
            float: "left",
            height: "inherit"
          }}
        >
          <button
            style={{
              border: "none",
              height: "25px",
              backgroundColor: "transparent"
            }}
            onClick={this.toggle}
          >
            Experience
          </button>
          <button
            style={{
              border: "none",
              height: "25px",
              backgroundColor: "transparent"
            }}
            onClick={this.toggle2}
          >
            Education
          </button>
          <button
            style={{
              border: "none",
              height: "25px",
              backgroundColor: "transparent"
            }}
            onClick={this.toggle3}
          >
            Projects
          </button>
          <button
            style={{
              border: "none",
              height: "25px",
              backgroundColor: "transparent"
            }}
            onClick={this.toggle4}
          >
            Skills
          </button>

          {this.state.showButton ? (
            <div className="container">
              <h1>Show Me</h1>
              <div>Hi this is show me 1</div>
            </div>
          ) : null}

          {this.state.showButton2 ? (
            <container>
              <h1>Show Me2</h1>
              <div>Hi this is show me 2</div>
            </container>
          ) : null}

          {this.state.showButton3 ? (
            <container>
              <h1>Show Me3</h1>
              <div>Hi this is show me 3</div>
            </container>
          ) : null}

          {this.state.showButton4 ? (
            <container>
              <h1>Show Me4</h1>
              <div>Hi this is show me 4</div>
            </container>
          ) : null}
        </div>
      </div>
    );
  }
}

export default aboutMenu;
