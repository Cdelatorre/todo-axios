import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todos/TodoList/TodoList';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className="App">
      <TodoList />
      {/* <Photos /> */}
    </div>
  );
}

export default App;
