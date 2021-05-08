import React from "react";

class Room extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}</h1>;
  }
}

module.exports = Room;
