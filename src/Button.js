import React from "react";

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
      <div>
        <button onClick={this.toggle}>Exp</button>
        <button onClick={this.toggle2}>Edu</button>
        <button onClick={this.toggle3}>Projs</button>
        <button onClick={this.hideAll}>Hide all</button>

        {this.state.showButton ? (
          <container>
            <h1>Show Me</h1>
            <div>Hi this is show me 1</div>
          </container>
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