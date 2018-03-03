import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

// import { pullRight, h1 } from './layout.css';

const Footer = ({ children }) => {
  return (
    <Container>
      {children}
      <Divider />
      <p style={{"textAlign": "center"}}>
        Made with <Icon name="heart" color="red" /> by <Icon name="spy" color="blue"/>Gu zhongren
      </p>
    </Container>
  );
};

export default Footer;