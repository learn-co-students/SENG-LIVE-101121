function Header(props){
    return(
        <div>
            <h1>{props.storeName}</h1>
            <h3>{props.slogan}</h3>
        </div>
    )
}

export default Header