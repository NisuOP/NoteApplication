import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="notes-table-container">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="note-column" scope="col">Notes</th>
            <th className="delete-column" scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.length === 0 ? (
            <>
            <tr>
              <td colSpan="2" className="no-notes-message">
                No notes found
              </td>
            </tr>
            </>
          ) : (
            notes.map((note) => (
              <tr key={note.id}>
                <td className="note-column-content">{note.text}</td>
                <td className="delete-column-content">
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(note.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NoteList;
