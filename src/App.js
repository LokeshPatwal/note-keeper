import React, { useState } from 'react';
import './component/styles.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Note from './component/Note';
import CreateArea from './component/CreateArea';

function App() {
  const [notes, setNotes] = useState([])

  function addnote(note) {
    setNotes((prevnotes) => {
      return [...prevnotes, note]
    })
  }

  function deletenote(id) {
    setNotes((prevnotes) => {
      return prevnotes.filter((eachnote, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <Footer />
      <CreateArea Adding={addnote} />
      {notes.map((eachnote, index) => {
        return <Note key={index} id={index} title={eachnote.title} content={eachnote.content} Deleting={deletenote} />
      })}
    </>
  )
}
export default App;