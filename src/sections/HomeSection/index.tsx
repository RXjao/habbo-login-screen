import React from 'react';

import habboLogo from '../../assets/HABBO.png'
import habboHotel from '../../assets/HabboHotel.png'

import * as Styles from './styles';

const HomeSection: React.FC = () => {
  return (
  <Styles.Container>
    <Styles.BoxLeft>

      <Styles.LogoImage src={habboLogo} />

        <Styles.Teste>
           <Styles.HabboHotelImage src={habboHotel}/>
        </Styles.Teste>
        
      
     
    </Styles.BoxLeft>

    <Styles.BoxRight>
      <Styles.SignIn>Sign In</Styles.SignIn>

      <Styles.SubText>Please input your habbo ID an password</Styles.SubText>

      <Styles.Input placeholder="Email" />
      <Styles.Input placeholder="Password" type="password" />

      <Styles.LetsGoDiv>
        <Styles.SignedView>
          <Styles.CheckBox type="checkbox" />

          <Styles.StayText>Stay signed in</Styles.StayText>
        </Styles.SignedView>

        <Styles.LetsGoButton>Let's Go!</Styles.LetsGoButton>
        
      </Styles.LetsGoDiv>
      
    <Styles.LoginFacebookDiv >
      <Styles.LoginFacebookButton>Login With Facebook</Styles.LoginFacebookButton>

    </Styles.LoginFacebookDiv>
      
    <Styles.CreateAccount href="#">I Don't have an account</Styles.CreateAccount>
    <Styles.SelectCountry href="#">Select your country!</Styles.SelectCountry>
    </Styles.BoxRight>
  </Styles.Container>
  )
}

export default HomeSection;