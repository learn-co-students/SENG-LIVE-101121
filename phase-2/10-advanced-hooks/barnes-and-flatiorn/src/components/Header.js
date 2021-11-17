import styled from "styled-components"
function Header({storeName, slogan}){
    return(

        <HeaderContainer>
            <h1>{storeName}</h1>
            <h3>{slogan}</h3>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    text-align:center;
    background-color: ${props => props.theme.colors.primary};

    h1{
        font-family: ${props => props.theme.font.primary}
    }
`