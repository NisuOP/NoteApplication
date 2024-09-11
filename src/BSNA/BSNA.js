import React, { useState } from "react";
import { toast } from "react-toastify";
import NoteList from "./NoteList";

const BSNA = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNoteAdd = () => {
    if (text.trim() === "") {
      toast.error("Note cannot be empty!");
      return;
    }
    
    const newNote = {
      text,
      id: Date.now(),
    };
    setNotes([newNote, ...notes]);
    setText("");
  };

  const handleNoteDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <div className="note-editor">
        <textarea
          placeholder="Enter your note here..."
          rows={5}
          className="textarea"
          value={text}
          onChange={handleTextChange}
        />
        <button className="add-button" onClick={handleNoteAdd}>
          Add
        </button>
      </div>
      <NoteList notes={notes} onDelete={handleNoteDelete} />
    </div>
  );
};

export default BSNA;
