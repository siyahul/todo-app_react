import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  state = {
    text: "",
    items: [],
  };
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { input } = this.state;
    this.setState({
      items: [...this.state.items, input],
      input: "",
    });
  };
  remove(id) {
    this.setState({
      items: this.state.items.filter((item, key) => key !== id),
    });
  }
  render() {
    const { input, items } = this.state;
    console.log(this.state.items);
    return (
      <div className="todo">
        <form className="todo__inputSection" onSubmit={this.handleSubmit}>
          <h1>Todo App</h1>
          <input
            placeholder="Enter items"
            className="todo__inputSection__input"
            value={input}
            onChange={this.handleChange}
          ></input>
        </form>
        <ul>
          {items.map((item, id) => (
            <li>
              {item}{" "}
              <i
                onClick={() => this.remove(id)}
                className="fas fa-trash-alt"
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
