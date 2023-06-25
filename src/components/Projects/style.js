import styled from 'styled-components';

export const ProjectSection = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
  background-color: ${props => props.bgColor};
`;

export const LoaderContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectList = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ProjectsHeading = styled.h4`
  font: 18px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-weight: bolder;
  margin: 0px;
  color: ${props => props.textColor};
  @media screen and (min-width: 767px) {
    text-align: center;
    font-size: 22px;
    letter-spacing: 3px;
  }
`;

export const ErrorView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  text-align: center;
  color: ${props => props.textColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  p{
    margin: 0px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

`;

export const ErrorImg = styled.img`
  width: 80%;
  max-width: 300px;
`;