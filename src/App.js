import React, { Component } from "react";
import CounterList from "./components/counterList";
import "./App.css";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = counter => {
    let newCounters = [...this.state.counters];
    let result = newCounters.indexOf(counter);
    newCounters[result].value++;
    this.setState({ counters: newCounters });
  };
  handleDecrement = counter => {
    let newCounters = [...this.state.counters];
    let index = newCounters.indexOf(counter);
    newCounters[index].value--;
    this.setState({ counters: newCounters });
  };
  handleDelete = counterid => {
    const counters = this.state.counters.filter(x => x.id !== counterid);
    this.setState({ counters });
  };
  handleReset = () => {
    let newCounters = [...this.state.counters];
    newCounters.map(x => (x.value = 0));
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          counters={this.state.counters.filter(c => c.value > 0).length}
        />
        <CounterList
          counters={this.state.counters}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
