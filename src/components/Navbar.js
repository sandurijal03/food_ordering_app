import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Reorder } from '@material-ui/icons';

import logo from '../assets/logo.png';
import { useState } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121619;
  border-bottom: white 300px;
  width: 100%;
  height: 100px;

  @media only screen and (max-width: 900px) {
    padding-left: 50px;
  }

  #open {
    padding-left: 0px;

    a {
      color: white;
      text-decoration: none;
    }

    ul {
      display: flex;

      li {
        display: flex;
        flex-direction: row;
      }
    }

    img {
      display: none;
    }

    .hiddenLinks {
      margin-left: 30px;
      a {
        color: white;
        text-decoration: none;
      }

      @media only screen and (min-width: 600px) {
        display: none;
      }
    }
  }

  #close {
    .hiddenLinks {
      display: none;

      @media only screen and (min-width: 600px) {
      }
    }

    img {
      display: inherit;
    }
  }
`;

const Left = styled.div`
  flex: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 150px;

  @media only screen and (max-width: 900px) {
    padding-left: 50px;
  }
`;

const Logo = styled.img`
  width: 70px;
`;

const Right = styled.div`
  flex: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 40px;
  }

  @media only screen and (max-width: 900px) {
    a {
      width: 70px;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-end;
    padding-right: 50px;

    button {
      display: inherit;
    }

    a {
      display: none;
    }
  }

  @media only screen and (min-width: 600px) {
    button {
      display: none;
    }
    .hiddenLinks {
      display: none;
    }
  }
`;

const Lists = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  text-transform: capitalize;

  a {
    color: white;
    text-decoration: none;
    margin: 20px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
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
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLink = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Wrapper>
      <Left id={showLinks ? 'open' : 'close'}>
        <Link to='/'>
          <Logo src={logo} />
        </Link>
        <Lists className='hiddenLinks'>{navLinks}</Lists>
      </Left>
      <Right>
        <Lists>{navLinks}</Lists>
        <Button onClick={handleShowLink}>
          <Reorder />
        </Button>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
