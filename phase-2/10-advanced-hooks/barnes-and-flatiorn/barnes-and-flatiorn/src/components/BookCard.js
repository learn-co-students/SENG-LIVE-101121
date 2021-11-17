import {Link} from 'react-router-dom';
import styled from 'styled-components'
function BookCard({ bookObj:{title, author, genre, price, liked}, bookObj}){

    return(
        <Card>
            <h4>{title}</h4>
            <h5>{author}</h5>
            <p className='genre'>{genre}</p>
            <p>{price}</p>
           <Link to={`/books/${bookObj.id}`}>Click for Details</Link>
        </Card>
    )
}

export default BookCard

const Card = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 300px;
    height:250px;
    padding:10px;
    margin:20px;
    box-shadow: 4px 4px 8px 0px rgb(0, 0, 0, 0.2);
    text-align:center;
    h4{
        font-family: ${props => props.theme.font.primary};
    }
    a{
        text-decoration: none;
        color:grey;
    }
    
    a:hover{
        color: green;
    }


`
// const H3 = styled.h3`
//     color: blue
// `