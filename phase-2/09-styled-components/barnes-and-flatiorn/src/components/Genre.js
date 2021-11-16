
function Genre({genreStr, handleGenre}){

    return(
   
        <div onClick={() => handleGenre(genreStr)} style={{margin:"5px"}}>{genreStr}</div>

    )
}

export default Genre
