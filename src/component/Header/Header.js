import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2 className="title"> Jquery To Do List</h2>
        <p className="sub-title">
          <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
      </div>
    );
  }
}

// <em> 是斜体标签
export default Header;
