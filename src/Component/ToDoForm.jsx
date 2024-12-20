import React, { useState } from 'react'

export const ToDoForm = ({ onSave, todos, editingId, onNavigate }) => {
    const editingTodo = todos?.find((todo) => todo.id === editingId) || {
        id: Date.now(),
        title: "",
        description: "",
        status: false,
    };

    const [formState, setFormState] = useState(editingTodo);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formState);
        onNavigate("list");
    };

    return (
        <div>
            <h1>{editingId ? "Edit To-Do" : "Add To-Do"}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Title"
                    value={formState.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formState.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => onNavigate("list")}>Cancel</button>
            </form>
        </div>
    );
};

