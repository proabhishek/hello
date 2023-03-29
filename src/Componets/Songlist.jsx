
// {id: 1, title: "All Star", artist: "Smash Mouth", genre: "Rock", rating: 4, duration: "3:15"}



const Songlist = ({songs, onSelect}) => {
     
    return(
        <div className="song-list"> 
             
                <table>
                    <tbody>
                    {
                      songs.map((song) =>{
                          return(
                            <tr key={song.id} onClick={()=>onSelect(song)}>
                                <td>{song.title}</td>
                            </tr>
                          )
          
                      })
                    }
                    </tbody>
                </table>


             
        </div>
    )



}

export default Songlist;