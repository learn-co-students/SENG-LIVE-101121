import {useState, useEffect} from 'react';

function useFetch(api){
    const [content, setContent] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setContent(data)
            setIsLoaded(true)
        })
    },[])
    return {
        content:content,
        isLoaded:isLoaded
    }
}

export default useFetch;