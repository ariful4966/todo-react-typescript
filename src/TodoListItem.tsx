import React, { FunctionComponent } from 'react';
import './TodoListItem.scss';

interface TodoListItemProps {
    todo: Todo;
}

export const TodoListItem: FunctionComponent<TodoListItemProps> = ({ todo }) => {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined} >
                <input type="checkbox" checked={todo.complete} />
                {todo.text}
            </label>
        </li>
    );
};