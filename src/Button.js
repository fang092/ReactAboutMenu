import React from "react";
import "./Button.scss";

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
      showButton3: false
    });
  };

  toggle2 = () => {
    this.setState({
      showButton: false,
      showButton2: true,
      showButton3: false
    });
  };
  toggle3 = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: true
    });
  };

  hideAll = () => {
    this.setState({
      showButton: false,
      showButton2: false,
      showButton3: false
    });
  };

  render() {
    return (
      <div id="aboutmenu" style={{ backgroundColor: "cyan", padding: "2%" }}>
        <button
          style={{
            border: "none",
            height: "25px",
            backgroundColor: "transparent"
          }}
          onClick={this.toggle}
        >
          Exp
        </button>
        <button
          style={{
            border: "none",
            height: "25px",
            backgroundColor: "transparent"
          }}
          onClick={this.toggle2}
        >
          Edu
        </button>
        <button
          style={{
            border: "none",
            height: "25px",
            backgroundColor: "transparent"
          }}
          onClick={this.toggle3}
        >
          Proj
        </button>
        <button
          style={{
            border: "none",
            height: "25px",
            backgroundColor: "transparent"
          }}
          onClick={this.hideAll}
        >
          Hide all
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
      </div>
    );
  }
}

export default aboutMenu;
