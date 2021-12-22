import logo from '../assets/logo.png'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
`;


const LogoWrapper = styled.div`
    margin: 0 50px;
`


const Logo = styled.img`
    width: 100px;
    height: 100px;
`

const Lists = styled.ul`
    list-style: none;
    display: flex;
    `

const ListItem = styled.li`
    margin: 0px 20px;
    text-transform: capitalize;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

`

const items = [
    {
        id: "1",
        link: "home"
    }, {
        id: "2",
        link: "menu"
    },  {
        id: "3",
        link: "about"
    }, {
        id: "4",
        link: "contact"
    }
]

const navLinks = items.map((item) => <ListItem key={item.id}>{item.link} </ListItem>);



const Navbar = () => {
    return(
        <Wrapper>
            <LogoWrapper>
                <Logo src={logo} />
            </LogoWrapper>
            <div className="right">
                <Lists>
                    {navLinks}
                </Lists>
            </div>
        </Wrapper>

    )
}


export default Navbar

