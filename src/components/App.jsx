import React from 'react';
import { Footer } from './Footer';
import {Header} from './Header';
import { Note } from './Note';
import {notes} from './../notes'

function App() {
    return (
        <div>
            <Header/> 
            <React.StrictMode>
            {notes.map(note => {return (<Note key={note.key} title={note.title} content={note.content}/>)})}
            </React.StrictMode>
            <Footer/>
        </div>
    )
}

export default App;

