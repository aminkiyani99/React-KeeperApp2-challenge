import React from "react";

function Note(amin) {
  return (
    <div className="note">
      <h1>{amin.title}</h1>
      <p>{amin.content}</p>
    </div>
  );
}

export default Note;
