import React, { Component } from "react";
import Counter from "./counter";
class CounterList extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary float-left"
          onClick={this.props.handleReset}
        >
          Reset Count
        </button>
        <div className="float-left mt-5">
          {this.props.counters.map(counter => (
            <Counter
              key={counter.id}
              onIncrement={this.props.handleIncrement}
              onDecrement={this.props.handleDecrement}
              onDelete={this.props.handleDelete}
              counter={counter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CounterList;
