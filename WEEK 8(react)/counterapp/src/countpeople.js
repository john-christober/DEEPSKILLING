import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button
          onClick={this.updateEntry}
          style={{
            backgroundColor: "lightgreen",
            padding: "10px",
            marginRight: "20px",
            borderRadius: "5px"
          }}
        >
          Login
        </button>
        <span style={{ marginRight: "40px" }}>
          {this.state.entryCount} People Entered!!!
        </span>

        <button
          onClick={this.updateExit}
          style={{
            backgroundColor: "lightgreen",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          Exit
        </button>
        <span style={{ marginLeft: "20px" }}>
          {this.state.exitCount} People Left!!!
        </span>
      </div>
    );
  }
}

export default CountPeople;
