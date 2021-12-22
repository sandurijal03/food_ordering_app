import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.png';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
`;

const LogoWrapper = styled.div`
  margin: 0 50px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const Lists = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin: 0px 20px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
  }
`;

const items = [
  {
    id: '1',
    link: 'home',
    path: '',
  },
  {
    id: '2',
    link: 'menu',
    path: '/menu',
  },
  {
    id: '3',
    link: 'about',
    path: '/about',
  },
  {
    id: '4',
    link: 'contact',
    path: '/contact',
  },
];

const navLinks = items.map((item) => {
  return (
    <ListItem key={item.id}>
      <Link to={`${item.path}`}>{item.link}</Link>
    </ListItem>
  );
});

const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} />
      </LogoWrapper>
      <div className='right'>
        <Lists>{navLinks}</Lists>
      </div>
    </Wrapper>
  );
};

export default Navbar;
