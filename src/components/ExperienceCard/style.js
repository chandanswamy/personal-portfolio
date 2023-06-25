import styled, {keyframes} from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const EduCard = styled.div`
    width: 100%;
    padding: 22px 32px 22px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    box-shadow: 6px 12px 36px 12px inset rgba(31, 38, 135, 0.49);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: left;
    animation: ${fadeInAnimation} 2s forwards;
    opacity: 0;
    @media screen and (min-width: 900px) {
        font-size: 22px;
        flex-direction: row;
        align-items: center;
    }
`;

export const Institution = styled.h1`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  @media screen and (min-width: 768px) {
        font-size: 22px;
    }
`;

export const City = styled.span`
align-self: flex-end;
  font-size: 14px;
  font-weight: bold;
  margin:  4px 0px 4px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
`;

export const Course = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin:  4px 0px 4px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
`;

export const Dates = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin:  4px 0px 4px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
`;

export const Field = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin:  16px 0px 0px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
`;

export const Score = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin:  4px 0px 4px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
`;

export const Description = styled.ul`
  padding: 0px;
  margin: 12px 0px 12px 0px;
`;

export const DescriptionItem = styled.li`
  font-size: 14px;
  font-weight: bold;
  margin:  4px 0px 4px 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
`;

export const CourseDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 6px;
    margin-bottom: 6px;
`

export const CourseDetailsContainer = styled.div`
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;  
  @media screen and (min-width: 900px) {
    width: 50%;
  }
`

export const CourseImageContainer = styled.div`
  @media screen and (min-width: 900px) {
    width: 40%;
  }
`

export const CourseImage = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  @media screen and (min-width: 900px) {
    width: 100%;
  }
`