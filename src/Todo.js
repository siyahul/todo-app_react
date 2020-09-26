import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  state = {
    text: "",
    edit: false,
    items: [],
    tid: null,
    temp: "",
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
  edit = (id) => {
    this.setState({ edit: true, tid: id });
  };
  onChangeEdit = (event) => {
    this.setState({ temp: event.target.value });
  };
  editSubmit = (id, event) => {
    event.preventDefault();
    const { temp, items } = this.state;
    const allItems = items;
    allItems[id] = temp;
    this.setState({
      items: allItems,
      edit: false,
    });
  };
  cancel = () =>{
    this.setState({ edit: false});
  }  
  render() {
    const { input, items, edit, temp, tid } = this.state;
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
          {items.map((item, ids) => (
            <li>
              {edit && tid == ids ? (
                <div>
                <form onSubmit={this.editSubmit.bind(this, ids)}>
                  <input id="todo__liInput" placeholder={item} onChange={this.onChangeEdit} />
                </form>
                <i class="fas fa-ban" onClick={this.cancel}></i>
                </div>
                
              ) : (
                <div>
                  {item}{" "}
                  <div id="icons">
                    <i
                      onClick={() => this.edit(ids)}
                      className="fa fa-pencil"
                      aria-hidden="true"
                    ></i>
                    <i
                      onClick={() => this.remove(ids)}
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
