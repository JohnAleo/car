import React, { useState } from 'react'
function credentialData() {
    const initialData=[];
    for (let i=0; i< 10; i++) {
        initialData.push({
            id:i,
            text:"data"+ (i+1),
        });
    }
    return initialData;
}

export default function Todolist () {
    const [todo , setTodo]=useState(credentialData);
    const [text, setText]=useState("");

  return (
    <>
     <input value={text} onChange={(e) => setText (e.target.value)} />
     <button onClick={() => {
        setText("")
        setTodo([
            {
                id:todo.length,
                text:text,
            },
            ...todo
        ]);
     }}
     >
        Add
     </button>
     <ul>
      {todo.map((item) => (
            <li key={item.id}>{item.text}
            </li>
        ))}
        </ul>
    </>
  )
}

