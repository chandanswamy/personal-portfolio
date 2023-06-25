import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const LoginRoute = styled.div`
    min-height: 100vh;
    padding: 22px 24px 22px 24px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.bgColor};
    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const LoginPageImageContainer = styled.div`
    width: 80%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;

`;

export const DesktopLoginImage = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        width: 100%;
        max-width: 350px;
    }
`;

export const MobileLoginImage = styled.img`
    display: block;
    width: 80%;
    max-width: 300px;
    @media screen and (min-width: 768px) {
        display: none;
    }

`;
  
export const LoginContainer = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: ${props => props.bgColor};
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${props => props.boxShadow};
`;

export const Title = styled.h2`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-bottom: 30px;
  color: ${props => props.textColor};
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
  color: ${props => props.textColor};
`;

export const Input = styled.input`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  background-color: #2196F3;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  height: 52px;
  color: ${props => props.textColor};
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 3px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28a745;
  }
`;

export const SignupLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #666;
  text-decoration: none;
`;

export const ErrorMessage = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: red;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const Loader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`