import styled from 'styled-components';

export const Card = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 1500ms;
`;


export const ProjectCardContainer = styled.li`
  list-style: none;
  min-width: 260px;
  max-width: 300px;
  height: 300px;
  perspective: 1000px;

  &:hover > ${Card}{
    cursor: pointer;
    transform: rotateY(180deg) rotateZ(180deg);
  } 
`;

export const CardFront = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px 18px 12px 18px;
    border-radius: 1rem;
    position: absolute;
    backface-visibility: hidden;
    background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  box-shadow: 12px 12px 32px 12px rgba(31, 38, 135, 0.41);
`;

export const CardBack = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px 18px 12px 18px;
    border-radius: 1rem;    
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg) rotateZ(180deg);
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    box-shadow: 6px 12px 36px 12px rgba(31, 38, 135, 0.37);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`;


export const ProjectTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProjectTitle = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 22px;

`;

export const ProjectDescription = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 16px;
`;

export const ProjectDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ProjectConcepts = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const ProjectSkills = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const ProjectsButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectButton = styled.button`
  height: 32px;
  min-width: 102px;
  max-width: 112px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  background: ${props => (props.isFrontend ? '#4CAF50' : '#2586cc')};
  color: snow;
  cursor: pointer;
  animation: ${props => (props.isFrontend ? 'glow' : 'glow-code')} 1s ease-in infinite;
  border: none;
  border-radius: 2px;

  @keyframes glow {
    0% {
      background: #4CAF50;
    }
    25% {
      background: #66BB6A;
    }
    100% {
      background: #4CAF50;
    }
  }

  @keyframes glow-code {
    0% {
      background: #2586cc;
    }
    25% {
      background: #3c96d6;
    }
    100% {
      background: #2586cc;
    }
  }
`;

export const ProjectButtonTag = styled.p`
  margin: 0 2px 0 0;
  letter-spacing: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: snow;
`;

export const ProjectIcon = styled.span`
  font-size: 18px;
  color: snow;
  font-weight: bolder;
`;