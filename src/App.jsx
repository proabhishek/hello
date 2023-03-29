const songs1 = [
  {id: 1, title: "All Star", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"},
  {id: 2, title: "Loliopop", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"},
  {id: 3, title: "Nach BAliaye", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"},
  {id: 4, title: "Badshah", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"},
  {id: 5, title: "Nattu Nattu", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"},
  
]

import Songlist from "./Componets/Songlist"
import {useState} from "react"
import SongDetails from "./Componets/SongDetails"

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  return (
    <div className="App">
      <Songlist songs={songs1} onSelect={setSelectedSong}/>
      <SongDetails song={selectedSong}/>
    </div>
  );
   
}

export default App;