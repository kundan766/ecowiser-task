


import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";


function App() {
  const [addItem, setAddItem] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  


  const notesPerPage = 6;

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((_currData, idx) => idx !== id);
    });
  };

  

 


    
  
  const pageCount = Math.ceil(addItem.length / notesPerPage);
  const displayedNotes = addItem.slice(
    pageNumber * notesPerPage,
    (pageNumber + 1) * notesPerPage
  );

  const handlePageClick = (selected) => {
    setPageNumber(selected);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i < pageCount; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={i === pageNumber ? "active" : ""}
          onClick={() => handlePageClick(i)}
        >
          {i + 1}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="App">
      <Header />
      <CreateNote passNote={addNote} />

      <div className="note-grid">
        {displayedNotes.map((val, index) => (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            // onEdit={() => openEditModal(val)}
          />
        ))}
      </div>

    


      <div className="pagination">
        {pageNumber > 0 && (
          <button onClick={() => handlePageClick(pageNumber - 1)}>Previous</button>
        )}
        {renderPageNumbers()}
        {pageNumber < pageCount - 1 && (
          <button onClick={() => handlePageClick(pageNumber + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;



