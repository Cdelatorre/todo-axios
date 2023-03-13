import { Component } from "react";
import { getTodoById, list } from "../../../services/TodoService";
import Todo from "../Todo/Todo";

class TodoList extends Component {
  state = {
    todos: [],
    completedFilter: false,
    randomTodo: null,
    loading: true,
  };

  handleClick = () => {
    this.setState((prev) => {
      return {
        completedFilter: !prev.completedFilter,
      };
    });
  };

  getRandomTodo = () => {
    const randomId = Math.floor(Math.random() * 20 + 1);

    getTodoById(randomId)
      .then((todo) => {
        this.setState({
          randomTodo: todo,
        });
      })
      .catch((err) => console.error(err));
  };

  onCompletedTask = (id) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: true } : todo
        ),
      }; // pero el del id el completed a true}
    });
  };

  componentDidMount() {
    list()
      .then((todos) => {
        this.setState({
          todos: todos.splice(0, 20),
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidUpdate() {
    if (this.state.randomTodo && this.state.randomTodo.id === 1) {
      console.log("HEY! Has actualizado y el random todo es 1");
    }
  }

  render() {
    return (
      <div>
        TODO LIST:
        <button className="btn btn-secondary" onClick={this.handleClick}>
          {this.state.completedFilter
            ? "filtro completados activo"
            : "filtro completados inactivo"}
        </button>
        <div>
          {this.state.loading ? (
            <div>Loading</div>
          ) : (
            <ol>
              {this.state.todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    {...todo}
                    onCompleted={this.onCompletedTask}
                  />
                );
              })}
            </ol>
          )}
        </div>
        <div>
          <h2>get random todo</h2>

          <button className="btn btn-primary" onClick={this.getRandomTodo}>
            get random!
          </button>

          {this.state.randomTodo && (
            <div>TODO: {this.state.randomTodo.title}</div>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
