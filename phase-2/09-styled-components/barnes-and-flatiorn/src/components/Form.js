
function Form({handleSubmit, formData, handleChange}){
  
    return(
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input 
            type="text"
            name="title"
            aria-label="title"
            value={formData.title}
            onChange={handleChange}
            ></input>
            <label>Author</label>
            <input 
            type="text"
            name="author"
            aria-label="author"
            value={formData.author}
            onChange={handleChange}
            ></input>
            <label>Genre</label>
            <input 
            type="text"
            name="genre"
            aria-label="genre"
            value={formData.genre}
            onChange={handleChange}
            ></input>
            <label>Price</label>
            <input 
            type="number"
            name="price"
            aria-label="price"
            value={formData.price}
            onChange={handleChange}
            ></input>
            <label>Image</label>
            <input 
            type="text"
            name="image"
            aria-label="image"
            value={formData.image}
            onChange={handleChange}
            ></input>
            <input type="submit" />
        </form>
    )
}

export default Form