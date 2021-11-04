function Genre({genreStr, handleGenre}){
    // const handleClick = () => {
    //     handleGenre(genreStr)
    // }

    return(
        <div onClick={() => handleGenre(genreStr)} style={{margin:"5px"}}>{genreStr}</div>
    )
}

export default Genre