
import { Nav,NavUL, NavLI, NavBUTTON, Logo,Aa } from "./Styles/NavComponent"

function NavBar(){
    return(
        <>
        <Nav>
            <Logo> <Aa href="/">IMG Lorem ipsum dolor sit, amet consectetur adipisicing elit...</Aa></Logo>
            <NavUL>
                <NavLI>
                    <NavBUTTON>Registrarte</NavBUTTON>
                </NavLI>
                <NavLI>
                    <NavBUTTON>Iniciar Sesion</NavBUTTON>
                </NavLI>
            </NavUL>
        </Nav>

</>
    )
}

export default NavBar