import MultiplePizzas from '../assets/masala.jpg';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 45%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-weight: 400;
    font-size: 70px;
    color: black;
    height: 30px;
    display: flex;
    justify-content: center;
    transform: translateY(-40px);
  }

  p {
    width: 1200px;
    margin-top: 20px;
    line-height: 30px;
    @media only screen and (max-width: 650px) {
      width: 500px;
      height: 100%;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <Header style={{ backgroundImage: `url(${MultiplePizzas})` }}></Header>
      <Description>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          fugiat cupiditate, doloremque aperiam sequi, a voluptatibus reiciendis
          assumenda accusantium voluptatem commodi, perferendis modi maxime
          consequatur ipsum ducimus quia obcaecati ad provident illum cum
          molestias? Quae enim explicabo placeat. Alias neque quis quod maxime
          voluptates consequuntur excepturi? Minus consectetur quaerat expedita,
          quisquam corporis tenetur voluptates animi earum ipsum maiores dolore,
          obcaecati voluptate non exercitationem soluta ipsa delectus molestias
          eius incidunt laudantium? Doloremque, ad nihil excepturi nesciunt
          explicabo neque enim ea illo voluptate repudiandae! Ut aliquam
          reiciendis necessitatibus delectus atque modi libero ab odit. Incidunt
          cupiditate dolorum hic ab aperiam accusantium dignissimos unde impedit
          dicta quo. Quos minima accusamus saepe deserunt laborum iste odio.
        </p>
      </Description>
    </Wrapper>
  );
};

export default About;
