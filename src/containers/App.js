import React, { Component } from "react";
import CardList from "../components/CardList";
import ErrorMessage from "../components/ErrorMessage";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/scroll";
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
          `Sorry, but it looks like you don't have any friends ...perhaps you should try getting out more!`
        );
      } else {
        this.setState({ error: null });
        const data = await response.json();
        this.setState({ robots: data });
      }
    } catch (error) {
      this.setState({ error: error });
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0 && !this.state.error) {
      return (
        <h2 className="tc" style={{ color: "white", paddingTop: "10rem" }}>
          Loading Robofriends, please wait.....
        </h2>
      );
    } else if (this.state.error) {
      return <ErrorMessage error={this.state.error.message} />;
    } else {
      return (
        <div className="tc">
          <div className="sticky">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
