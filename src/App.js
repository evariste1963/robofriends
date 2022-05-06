import React, { Component } from "react";
import CardList from "./CardList";
import ErrorMessage from "./ErrorMessage";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      if (!response.ok) {
        throw Error(
          `Sorry, but it looks like you don't have any freinds ...perhaps you should try getting out more!`
        );
      } else this.setState({ error: null });
      const data = await response.json();
      this.setState({ robots: data });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0 && !this.state.error) {
      return (
        <h2 className='tc' style={{ color: "white", paddingTop: "10rem" }}>
          Loading Robofreinds, please wait.....
        </h2>
      );
    } else if (this.state.error) {
      return <div>{<ErrorMessage error={this.state.error.message} />}</div>;
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
