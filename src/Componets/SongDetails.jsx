
//{id: 1, title: "All Star", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"}

const SongDetails = ({song}) => {
        console.log("songs",song)
    return(
        <div>
           {
            song &&
            <div>
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.rating}</p>
            <p>{song.duration}</p>
            </div>

           }
            
        </div>
    )

}


export default SongDetails;