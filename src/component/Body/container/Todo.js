import React from "react";
import "./TodoList.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      todo: this.props.content,
      isReadOnly: true,
      isChecked: this.props.isChecked,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReadOnly = this.handleReadOnly.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    //this.handleKeyPressed = this.handleKeyPressed.bind(this);
  }

  handleInputChange(e) {
    this.setState({ todo: e.target.value });
    //this.props.handleContentChange(this.props.id, e.target.value);
  }

  handleReadOnly() {
    this.setState({ isReadOnly: false });
  }

  handleChecked(e) {
    this.setState({
      isChecked: e.target.checked,
    });
    this.props.handleState(this.props.id + 1, e.target.checked);
  }

  /*
  handleKeyPressed(e) {
    if (e.key === "Enter") {
      this.props.handleContentChange(this.props.id, e.target.value);
      this.setState({ isReadOnly: true });
    }
  }
  */

  render() {
    return (
      <li
        className={this.props.id % 2 === 0 ? null : "even"}
        //className={this.state.isChecked ? "completed" : null}
      >
        <input
          type="checkbox"
          className="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChecked}
        />
        <input
          type="text"
          className={
            this.state.isChecked ? "completed input-text" : "input-text"
          }
          readOnly={this.state.isReadOnly}
          value={this.state.todo}
          onChange={this.handleInputChange}
          onDoubleClick={this.handleReadOnly}
          //onKeyPress={this.handleKeyPressed}
        />
      </li>
    );
  }
}

export default Todo;

//这是每一条待办任务的组件
/*
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <li>
        <input type="checkbox"></input>
        <input type="text" value={this.props.task} />
      </li>
    );
  }
}

export default Item;
*/

/*
function Todo(props) {
  return (
    <li className={props.id % 2 === 0 ? null : "even"}>
      <input type="checkbox" className="checkbox" />
      <input type="text" className="input-text" value={props.content} />
    </li>
  );
}
*/
