import styled from 'styled-components';
import MenuItem from '../components/MenuItem';
import menuList from '../data';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MenuTitle = styled.h1`
  font-size: 4rem;
`;

const MenuList = styled.div`
  width: 70vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <MenuTitle>Our Menu</MenuTitle>
      <MenuList>
        {menuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              name={menuItem.name}
              image={menuItem.image}
              price={menuItem.price}
            />
          );
        })}
      </MenuList>
    </Wrapper>
  );
};

export default Menu;
