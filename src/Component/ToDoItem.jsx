import React from 'react'

export const ToDoItem = ({ todo, onDelete, onToggleStatus, onEdit }) => (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <span>Status: {todo.status ? "Complete" : "Pending"}</span>
        </div>
        <div>
            <button onClick={() => onToggleStatus(todo.id)}>Toggle Status</button>
            <button onClick={() => onEdit(todo.id)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    </div>
);
