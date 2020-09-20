import React, { Fragment, FunctionComponent } from 'react';
import { TodoListItem } from './TodoListItem';



const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false }
];

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <TodoListItem todo={todos[0]}></TodoListItem>
      <TodoListItem todo={todos[1]}></TodoListItem>
    </Fragment>
  );
}

export default App;
