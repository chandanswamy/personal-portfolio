import styled, { keyframes } from 'styled-components';

export const slideDownAnimation = keyframes`
  from {
    transform: translateY(15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideUpAnimation = keyframes`
  from {
    transform: translateY(-15px);
  }
  to {
    transform: translateY(0);
  }
`;

export const FadeInAnimation = keyframes`
from {
    opacity: 0;
    transform: translateY(+30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const ContactRoute = styled.div`
  padding: 24px 16px 24px 16px;
  background-color: ${(props) => props.darkmode ? '#000' : '#fff'} ;
  min-height: calc(100vh - 45px);
  @media screen and (min-width: 768px) {
  padding: 32px 24px 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 64px);
  }  
  }
`

export const ContactSection = styled.div`  
  display: flex;
  flex-direction: column;
  color: ${(props) => props.darkmode ? '#fff' : '#000'} ;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }  
`;


export const ContactSectionForm = styled.div`
    width: 90%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
    margin-top: 12px;
`

export const ContactMe = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: ${(props) => props.darkmode ? '#fff' : '#000'} ;
  animation: ${slideDownAnimation} 3s forwards;
  margin-bottom: 12px;
  margin-top: 12px;
  opacity: 0;
  
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  animation: ${slideUpAnimation} 2s forwards;
  margin-bottom: 12px;
  margin-top: 12px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 70px;
  margin-bottom: 8px;
`;

export const FormControl = styled.input`
  width: 100%;
  height: 42px;
  max-width: 350px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;;
  border-radius: 4px;
  background-color: ${(props) => props.darkmode ? '#28282B' : '#fff'} ;
  color: ${(props) => props.darkmode ? '#fff' : '#000'} ;
  border-color: ${(props) => props.darkmode ? '#fff' : '#000'} ;
  border: 1px solid;
  padding-left: 16px;
  font-size: 16px;
  
  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 350px;
  border-radius: 4px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;;
  background-color: ${(props) => props.darkmode ? '#28282B' : '#fff'} ;
  color: ${(props) => props.darkmode ? '#fff' : '#000'} ;
  border-color: ${(props) => props.darkmode ? '#fff' : '#000'} ;
  border: 1px solid;
  padding-left: 16px;
  padding-top: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const FormLabel = styled.label`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

export const SubmitButton = styled.button`
  background: #8BC34A;
  color: #fefefe;
  padding: 16px;
  border-radius: 4px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;;
  cursor: pointer;
  width: 150px;
  border: 0;
  font-size: 20px;
  margin: 12px 0px 12px 0px;
`;

export const ContactSectionImage = styled.img`
    width: 80%;
    max-width: 400px;
    opacity: 0;
    animation: ${FadeInAnimation} 2s forwards;
`

export const Loader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ErrorMessage = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: red;
    margin-top: 4px;
    margin-bottom: 4px;
`