import { useState } from "react";

function credentialData() {
  const intialData = [];
  for (let i = 0; i < 10; i++) {
    intialData.push({
      id: i,
      text: "data" + (i + 1),
    });
  }
  return intialData;
}

export default function TodoList() {
  const [todo, setTodos] = useState(credentialData);
  const [text, setText] = useState("");

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todo.length,
              text: text,
            },
            ...todo,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
}