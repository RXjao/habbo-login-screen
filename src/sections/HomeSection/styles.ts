import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(-45deg, #0c3357, #0c587d);
  flex-direction: row;
  display: flex;
`;

export const BoxLeft = styled.div`

  min-height: 100vh;
  width: 40vw;
  display: flex;
  align=items: flex-strat;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  

  
`;

export const BoxRight = styled.div`
  height: 100vh;
  width: 60vw;
  align-items: flex-center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  padding-left: 100px;
`;

export const LogoImage = styled.img`
  height: 120px;
  width: 260px;
  object-fit: contain;
  margin-top: 50px;
  margin-left: 50px;
`;


export const HabboHotelImage = styled.img`
  height: 20rem;
  width: 25rem;
  object-fit: contain;
  
 
`;

export const Teste = styled.div`
background: #f90;

`;

export const SignIn = styled.h1`
  font-size: 40px;
  color: #e0e1e1;
  font-weight: 400;
  font-family: 'Ubuntu Condensed';
`;

export const SubText = styled.h1`
  font-size: 1rem;
  color: #74bee1;
  font-weight: 400;
  font-family: 'Ubuntu Condensed';
  margin-top: 12px;
`;

export const Input = styled.input`
  width: 80%;
  background-color: #c8d5db;
  color: #6a7d81;
  border-radius: 4px;
  border: 2px solid #265b8b;
  font-size: 20px;
  padding: 8px;
  margin-top: 8px;
`;

export const LetsGoDiv = styled.div`
  flex-direction: row;
  display: flex;
  width: 80%;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const CheckBox = styled.input`
  height: 24px;
  width: 24px;
`;

export const StayText = styled.h1`
  font-size: 1.2rem;
  color: #e0e1e1;
  font-weight: 400;
  font-family: 'Ubuntu Condensed';
  margin-left: 8px;
`;

export const SignedView = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const LetsGoButton = styled.button`
  background-color: #019c53;
  border-radius: 8px;
  border: 1px solid #b5ee71;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #dee0df;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 0 1.5rem #00000010;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0f0;
    box-shadow: 0 0 1.5rem #00000050;
  }
`;
export const LoginFacebookDiv = styled.div`
  flex-direction: column;
  display: flex;
  width: 80%;
  margin-top: 8px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;
export const LoginFacebookButton = styled.button`
  width: 100%;
  background-color: #1E90FF;
  border-radius: 7px;
  border: 1px solid #b5ee71;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 0.4rem;
  padding-bottom: 0.1rem;
  color: #dee0df;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 0 1.5rem #00000010;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4682B4;
    box-shadow: 0 0 1.5rem #00000050;
  }
`;


export const CreateAccount = styled.a`
  font-size: 1.1rem;
  color: #74bee1;
  font-weight: 400;
  font-family: 'Ubuntu Condensed';
  margin-top: 12px;
  margin-left: 10rem;
  `;

  export const SelectCountry = styled.a`
  font-size: 1.1rem;
  color: #74bee1;
  font-weight: 400;
  font-family: 'Ubuntu Condensed';
  margin-top: 12px;
  margin-left: 11rem;
  `;