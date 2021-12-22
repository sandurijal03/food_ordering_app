import React from 'react';
import styled from 'styled-components';
import { Facebook, LinkedIn, Twitter, Instagram } from '@material-ui/icons';

const Wrapper = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #121619;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
`;

const SocialLinks = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: white;
    margin: 20px;
    font-size: 70px;
  }
`;

const CopyRight = styled.p`
  color: white;
`;

const Footer = () => {
  return (
    <Wrapper>
      <SocialLinks>
        <Facebook fontSize='large' />
        <Instagram fontSize='large' />
        <Twitter fontSize='large' />
        <LinkedIn fontSize='large' />
      </SocialLinks>
      <CopyRight>&copy; 2021 Foodmanza.com</CopyRight>
    </Wrapper>
  );
};

export default Footer;
