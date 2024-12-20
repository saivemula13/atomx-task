import React from 'react'
import { ToDoItem } from './ToDoItem';

export const ToDoList = ({ todos, onDelete, onToggleStatus, onNavigate }) => (
    <div>
        <h1>To-Do List</h1>
        <button onClick={() => onNavigate("form")}>Add New To-Do</button>
        <div>
            {todos?.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggleStatus={onToggleStatus}
                    onEdit={() => onNavigate("form", todo.id)}
                />
            ))}
        </div>
    </div>
);
