import React, { Component } from "react";
import Form from "./Utils/Form";
import Input from "./Utils/Input";

import "./Todo.css";

export default class Todo extends Component {
  state = {
    edit: false,
    items: [],
    tid: null,
    editing: "",
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = () => (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.title],
      title: "",
    });
  };
  remove(id) {
    this.setState({
      items: this.state.items.filter((item, key) => key !== id),
    });
  }
  handleEdit = (id, item) => {
    this.setState({ edit: true, tid: id, editing: item });
  };
  submitEdited = (id) => (event) => {
    event.preventDefault();
    const { editing, items } = this.state;
    const allItems = items;
    allItems[id] = editing;
    this.setState({
      items: allItems,
      edit: false,
    });
  };
  cancel = () => {
    this.setState({ edit: false });
  };
  render() {
    const { items, edit, tid } = this.state;
    const title = "title";
    return (
      <div className="todo">
        <Form
          className="todo__inputSection"
          name={title}
          onSubmit={this.handleSubmit()}
        >
          <h1>Todo App</h1>
          <Input
            placeholder="Enter items"
            className="todo__inputSection__input"
            name={title}
            value={this.state.title}
            onChange={this.handleChange}
          ></Input>
        </Form>
        <ul>
          {items.map((item, key) => (
            <li>
              {edit && tid == key ? (
                <div>
                  <Form onSubmit={this.submitEdited(key)}>
                    <Input
                      id="todo__liInput"
                      value={this.state.editing}
                      name="editing"
                      onChange={this.handleChange}
                    />
                  </Form>
                  <i class="fas fa-ban" onClick={this.cancel}></i>
                </div>
              ) : (
                <div>
                  {item}{" "}
                  <div id="icons">
                    <i
                      onClick={() => this.handleEdit(key, item)}
                      className="fa fa-pencil"
                      aria-hidden="true"
                    ></i>
                    <i
                      onClick={() => this.remove(key)}
                      className="fas fa-trash-alt"
                    ></i>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
