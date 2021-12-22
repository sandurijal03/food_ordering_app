import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 15px;
  width: 300px;
  height: 350px;
  margin: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  :hover {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in;
    cursor: pointer;
  }

  h1 {
    margin: 0 20px 10px;
    font-size: 1.5rem;
  }

  p {
    margin-left: 20px;
  }
`;

const Image = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const MenuItem = ({ image, name, price }) => {
  return (
    <Wrapper>
      <Image style={{ backgroundImage: `url(${image})` }}></Image>
      <h1>{name}</h1>
      <p>Rs. {price}</p>
    </Wrapper>
  );
};

export default MenuItem;
