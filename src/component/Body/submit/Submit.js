import React from "react";
import "./Submit.css";

//选择使用submit而不是add，强化表单意识

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.item === "") {
      return;
    } else {
      this.props.onFormSubmit(this.state.item); //调用Body中的函数，将任务添加到任务列表
      this.setState({ item: "" }); //清空输入框
    }
  }

  handleChange(e) {
    this.setState({
      item: e.target.value, //实时更新，使输入框中的值可变
    });
  }

  render() {
    return (
      <form className="from" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Item"
          value={this.state.item}
          onChange={this.handleChange}
        />
        <button className="button">Add</button>
      </form>
    );
  }
}

export default Submit;

/*
class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.item === "") {
      return;
    } else {
      this.props.onSubmit(this.state.item);
      this.setState({ item: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Task Name"
          value={this.state.item}
          onChange={(e) => this.setState({ item: e.target.value })}
        />
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default Submit;
*/

//此处使用[item]为单位，将作为[task]被传入[tasks]中，并短暂地作为[todo]传入元素[todos]和[组件<Todo />]中
