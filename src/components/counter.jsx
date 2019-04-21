import React, { Component } from "react";
class Counter extends Component {
  state = {};

  changeValueClass(value) {
    let c = "badge badge-pill m-2";
    if (value === 0 || value === "Zero") {
      c = c + " badge-warning";
    } else {
      c = c + " badge-primary";
    }
    return c;
  }
  counterValue(value) {
    if (value === 0) {
      return "Zero";
    }
    return value;
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col m-2 ">
            <span className={this.changeValueClass(this.props.counter.value)}>
              {this.counterValue(this.props.counter.value)}
            </span>
            <button
              type="button"
              className="btn btn-secondary  m-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            <button
              type="button"
              className="btn btn-secondary  m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
