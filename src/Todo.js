import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <form className="todo__inputSection">
          <h1>Todo App</h1>
          <input
            placeholder="Enter items"
            className="todo__inputSection__input"
          ></input>
        </form>
        <ul>
          <li>
            Items <i className="fas fa-trash-alt"></i>
          </li>
          <li>
            Items <i className="fas fa-trash-alt"></i>
          </li>
        </ul>
      </div>
    );
  }
}
