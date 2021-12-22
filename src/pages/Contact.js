import styled from 'styled-components';
import Pizza from '../assets/fooda.jpeg';

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;

  @media only screen and (max-width: 650px) {
    justify-content: space-between;
    flex-direction: column;
  }
`;

const Left = styled.div`
  height: 100%;
  flex: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Right = styled.div`
  height: 100%;
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
    font-weight: 10;
    font-size: 50px;
    margin-left: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  padding: 30px;
`;

const Label = styled.label`
  margin-top: 15px;
  color: grey;
`;

const Input = styled.input`
  height: 40px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #121619;
  color: black;

  ::placeholder {
    font-weight: bold;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
  }

  :focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  margin-top: 15px;
  height: 70px;
  width: 80%;
  border: none;
  border-bottom: 1px solid #121619;
  color: black;

  ::placeholder {
    font-weight: bold;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
  }

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 140px;
  height: 40px;
  border: none;
  background-color: #121619;
  color: whitesmoke;
  font-size: 15px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Wrapper>
      <Left style={{ backgroundImage: `url(${Pizza})` }}></Left>

      <Right>
        <h1>Contact Us</h1>
        <Form>
          <Label htmlFor='name'>Full Name</Label>
          <Input name='name' placeholder='Enter full name...' type='text' />
          <Label htmlFor='email'>Email</Label>
          <Input name='email' placeholder='Enter email...' type='email' />
          <Label htmlFor='message'>Message</Label>
          <Textarea
            rows='6'
            placeholder='Enter message...'
            name='message'
            required
          ></Textarea>
          <Button type='submit'> Send Message</Button>
        </Form>
      </Right>
    </Wrapper>
  );
};

export default Contact;
