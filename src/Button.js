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
      <div className="menubg">
        <div className="photo">Hi</div>

        <div className="aboutmenu">
          <button className="underline" onClick={this.toggle}>
            Experience
          </button>
          <button className="underline" onClick={this.toggle2}>
            Education
          </button>
          <button className="underline" onClick={this.toggle3}>
            Projects
          </button>
          <button className="underline" onClick={this.toggle4}>
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
