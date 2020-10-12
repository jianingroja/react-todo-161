import React from "react";
import "./Body.css";
import TodoList from "./container/TodoList";
import Submit from "./submit/Submit";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, content: "Learning something pretty", isChecked: false },
      ],
      filteredTasks: [],
      isFiltered: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handlecontentChange = this.handleContentChange.bind(this);
  }
  //此处[tasks]中的[task]，来源于输入框中的[item]，将短暂地作为[todo]传入元素[todos]和组件[<Todo />]中

  handleSubmit(task) {
    this.setState((state) => {
      const newTask = [
        {
          id: this.state.tasks.length + 1,
          content: task,
          isChecked: false,
        },
      ];
      const tasks = state.tasks.concat(newTask);
      return {
        tasks: tasks,
      };
    });
    this.filterTasks("Active");
    //解决添加新任务后无法实时更新列表的问题，我真是小天才（暂时>>>还要研究下别的方法）
  }

  handleState(id, isChecked) {
    this.setState((state) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.isChecked = isChecked;
        }
        return task;
      });
      return tasks;
    });
  }

  handleContentChange(id, content) {
    this.setState((state) => {
      const tasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.content = content;
        }
        return task;
      });
      return tasks;
    });
  }

  filterTasks(condition) {
    switch (condition) {
      case "Active":
        this.setState((state) => {
          return {
            filteredTasks: state.tasks.filter((task) => !task.isChecked),
          };
        });
        break;
      case "Completed":
        this.setState((state) => {
          return {
            filteredTasks: state.tasks.filter((task) => task.isChecked),
          };
        });
        break;
      case "All":
      default:
        this.setState({
          filteredTasks: this.state.tasks,
        });
        break;
    }
    this.setState({ isFiltered: true });
  }

  render() {
    return (
      <div className="todo-body">
        <div>
          <Submit onFormSubmit={this.handleSubmit} />
          <TodoList
            tasks={
              this.state.isFiltered
                ? this.state.filteredTasks
                : this.state.tasks
            }
            handleState={this.handleState}
            handleContentChange={this.handlecontentChange}
            /*onDelete={this.handelDelete}*/
          />
        </div>
      </div>
    );
  }
}

/*原例子中删除待办任务的功能
  handelDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };
  */

/* 展示一共有几个待办事项
const Header = (props) => {
  return (
    <div className="card-header">
      <h1 className="card-header-title header">
        You have {props.numTodos} Todos
      </h1>
    </div>
  );
};
*/

/*
const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return (
    <div className="list-wrapper">
      <ol>{todos}</ol>
    </div>
  );
};

const Todo = (props) => {
  return (
    <li className={props.id % 2 === 0 ? null : "even"}>
      <input type="checkbox" />
      {props.content}
    </li>
  );
};
*/

/*
class SubmitForm extends React.Component {
  state = { term: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.term === "") {
      return;
    } else {
      this.props.onFormSubmit(this.state.term);
      this.setState({ term: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter Item"
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button className="button">Add</button>
      </form>
    );
  }
}*/

export default Body;
