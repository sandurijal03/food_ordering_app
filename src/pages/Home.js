import styled from 'styled-components';
import banner from '../assets/food.jpeg';

const Wrapper = styled.div`
  background: url(${banner});
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media only screen and (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }
`;

const HeaderWrapper = styled.div`
  width: auto;
  margin-left: 50px;
  @media only screen and (max-width: 650px) {
    margin-left: 0px;
    border-radius: 10px;
    padding: 10px;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #121619;
    color: white;
  }
`;

const Title = styled.h1`
  padding-top: 20px;
  font-size: 5rem;
  color: blue;
  font-weight: 500;
  letter-spacing: 5px;

  @media only screen and (max-width: 650px) {
    font-size: 2.5rem;
    color: white;
  }
`;

const SubTitle = styled.p`
  font-size: 2rem;
  padding: 20px 0 0 0;
  letter-spacing: 3px;

  @media only screen and (max-width: 650px) {
    font-size: 2rem;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    color: white;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 2rem;
  margin-top: 50px;
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 650px) {
    background-color: white;
    color: #121619;
    margin-bottom: 30px;
  }

  :hover {
    background-color: #07090a;
    cursor: pointer;
    transition: 0.3s ease-in;
    color: white;
    @media only screen and (max-width: 650px) {
      background-color: rgb(225, 225, 225);
      color: #121619;
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Food Corner</Title>
        <SubTitle>Indian and Nepalese Food at a click</SubTitle>
        <Button>Order Now</Button>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Home;
