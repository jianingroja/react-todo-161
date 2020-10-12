import React from "react";
import "./TodoDemo.css";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";

class TodoDemo extends React.Component {
  constructor(props) {
    super(props);
    this.body = React.createRef();
    this.filterTasks = this.filterTasks.bind(this);
  }

  filterTasks(condition) {
    this.body.current.filterTasks(condition);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Body ref={this.body} />
        <Footer filterTasks={this.filterTasks} />
      </div>
    );
  }
}

export default TodoDemo;
