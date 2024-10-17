import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null); // Tracks the index of the todo being edited
  const [editText, setEditText] = useState<string>(""); // Holds the text being edited

  const handleTodo = () => {
    if (text.trim()) {
      setTodos((prevTodos) => [...prevTodos, text]);
      setText(""); // Clear input after adding
    }
  };

  const handleDelete = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index)); // Remove todo by index
  };

  const handleEdit = (index: number) => {
    setIsEditing(index); // Set the todo to be edited
    setEditText(todos[index]); // Set the current text of the todo to be edited
  };

  const handleSaveEdit = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? editText : todo
    ); // Update the todo at the specific index
    setTodos(updatedTodos); // Update the state with the new todo text
    setIsEditing(null); // Exit edit mode
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        padding: "2rem",
      }}
    >
      <h1>Todo List</h1>
      <div style={{ width: "15rem", display: "flex", flexDirection: "column" }}>
        <input
          style={{ height: "2rem", width: "15rem" }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          style={{
            height: "2rem",
            width: "5rem",
            alignSelf: "center",
            marginTop: "1rem",
            cursor: "pointer",
          }}
          onClick={handleTodo}
        >
          create
        </button>
      </div>

      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          width: "30rem",
          gap: "1rem",
        }}
      >
        {todos.map((t, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              height: "2rem",
              width: "100%",
              justifyContent: "space-between",
              backgroundColor: "skyblue",
              alignItems: "center",
              padding: ".4rem",
            }}
          >
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ width: "70%" }}
                />
                <button
                  onClick={() => handleSaveEdit(index)}
                  style={{ cursor: "pointer" }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <strong>
                  {index + 1}. {t}
                </strong>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleEdit(index)}
                  >
                    edit
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;