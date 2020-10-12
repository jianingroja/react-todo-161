import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="list-wrapper">
        <ol>
          {this.props.tasks.map((todo, index) => {
            return (
              <Todo
                content={todo.content}
                key={todo.id}
                id={index}
                isChecked={todo.isChecked}
                handleState={this.props.handleState}
                handleContentChange={this.props.handleContentChange}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default TodoList;

/*
class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <ol>
          {this.props.tasks.map((task, index) => {
            return <Item key={index} id={index} task={task} />;
          })}
        </ol>
      </div>
    );
  }
}


export default ItemContainer;
*/

//此处[todo]，是[tasks]中的[task]，来源于早期输入框中的[item]

/*
function TodoList(props) {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo
        content={todo}
        key={index}
        id={index}
        //onDelete={props.onDelete}
      />
    );
  });

  return (
    <div className="list-wrapper">
      <ol>{todos}</ol>
    </div>
  );
}
*/
