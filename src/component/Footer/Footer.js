import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { condition: "Default" };
    //this.filterTasks = this.filterTasks.bind(this); 用不了，可能会body.current有关
  }

  filterTasks(condition) {
    if (this.state.condition === condition) {
      this.props.filterTasks("Default");
      this.setState({ condition: "Default" });
    } else {
      this.props.filterTasks(condition);
      this.setState({ condition: condition });
    }
  }

  render() {
    return (
      <div className="footer">
        <button
          className={
            this.state.condition === "All"
              ? "filtered default"
              : "button-footer"
          }
          onClick={(e) => this.filterTasks("All", e)}
        >
          All
        </button>
        <button
          className={
            this.state.condition === "Active" ? "filtered" : "button-footer"
          }
          onClick={(e) => this.filterTasks("Active", e)}
        >
          Active
        </button>
        <button
          className={
            this.state.condition === "Completed" ? "filtered" : "button-footer"
          }
          onClick={(e) => this.filterTasks("Completed", e)}
        >
          Completed
        </button>
      </div>
    );
  }
}

//此处事件写法好像与ref有关，用bind（this）则typeerror

export default Footer;
