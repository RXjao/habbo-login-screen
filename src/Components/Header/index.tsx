import React from 'react';
import styled from 'styled-components';

import * as Styles from './styles'; //importando tudoda pasta styles

const Header: React.FC = () => {
  return (
      <>
     <Styles.Container>
      <Styles.logo href="#">portfol <p>io</p></Styles.logo>

      <Styles.Navbar>
          <Styles.Options href="#home">Home</Styles.Options>
          <Styles.Options href="#about">Sobre</Styles.Options>
          <Styles.Options href="#skills">Habilidades</Styles.Options>
          <Styles.Options href="#services">Serviços</Styles.Options>
          <Styles.Options href="#projects">Projetos</Styles.Options>
          <Styles.Options href="#contact">Contato</Styles.Options>
        
        </Styles.Navbar>  
       
     </Styles.Container>
   

    


   </>
  )
}

export default Header;
