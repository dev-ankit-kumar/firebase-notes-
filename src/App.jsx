import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase_config";
import { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/notes';
import NoteForm from './components/noteForm';
import PaginatedItems from "./components/PaginatedNotes";

function App() {
  const [notes, setNotes] = useState([]);
  const [notesLoading, setNotesLoading] = useState(false);
  useEffect(() => {
    async function getAllData() {
      setNotesLoading(true);
      const querySnapshot = await getDocs(collection(db, "notes"));
      const notesData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        notesData.push({ id: doc.id, ...doc.data() });
        console.log(doc.id, " => ", doc.data());
      });
      setNotes(notesData);
      setNotesLoading(false);
    }
    getAllData();
  }, []);

  return (
    <>


      <NoteForm setNotes={setNotes} />
      {/* <Notes loading={notesLoading} notes={notes} setNotes={setNotes} /> */}
      <PaginatedItems notes={notes} loading={notesLoading} setNotes={setNotes} itemsPerPage={6}/>

    </>

  )
}

export default App
