import styled, { keyframes } from 'styled-components';
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ProjectCardContainer = styled.li`
  list-style: none;
  width: 90%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 12px 8px 12px 8px;
  padding: 12px 18px 12px 18px;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
  box-shadow: 6px 12px 36px 12px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  animation: ${fadeInAnimation} 1.5s forwards;
  opacity: 0;
  @media screen and (min-width: 768px) {
    height: 350px;
  }
`;

export const ProjectTitleContainer = styled.div`
  margin-bottom: 12px;
`;

export const ProjectTitle = styled.h4`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 22px;
  margin: 0;
`;

export const ProjectDescription = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 12px 0 0 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectDetailsContainer = styled.div`
  margin: 0 0 8px 0;
`;

export const ProjectConcepts = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0;
`;

export const ProjectSkills = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0;
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