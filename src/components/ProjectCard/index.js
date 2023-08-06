import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import PortfolioContext from '../../context/PortfolioContext'


import { Card, CardFront, CardBack, ProjectCardContainer, ProjectButton, ProjectButtonTag, ProjectConcepts, ProjectDescription, ProjectDetailsContainer, ProjectIcon, ProjectSkills, ProjectTitle, ProjectTitleContainer, ProjectsButtonContainer } from './style';

const ProjectCard = (props) => {
  const { projectDetails } = props;
  const { projectTitle, projectCode, projectDemo, projectDomain, projectDescription, skills, concept } = projectDetails;
  const isFrontend = projectDomain === 'Frontend';

  const onClickDemoButton = () => {
    window.open(projectDemo, '_blank')
  };

  const onClickCodeButton = () => {
    window.open(projectCode, "_blank")
  };
  return(
  <PortfolioContext.Consumer>
    {value => {
      const {isDarkTheme} = value;
      const bgColor = isDarkTheme ? '#000' : '#fff'
      const textColor = isDarkTheme ? '#fff' : '#000'
      return (
        <ProjectCardContainer bgColor={bgColor} textColor={textColor}>
          <Card>
            <CardFront textColor={textColor}>
              <ProjectTitleContainer>
                <ProjectTitle>{projectTitle}</ProjectTitle>
                <ProjectDescription>{projectDescription}</ProjectDescription>
              </ProjectTitleContainer>
            </CardFront>
            <CardBack textColor={textColor}>
              <ProjectDetailsContainer>
                <ProjectConcepts>{`Concepts : ${concept}`}</ProjectConcepts>
                <ProjectSkills>{`Skills : ${skills}`}</ProjectSkills>
              </ProjectDetailsContainer>
              <ProjectsButtonContainer>
                {isFrontend && (
                  <ProjectButton type='button' className='code' onClick={onClickDemoButton} isFrontend={isFrontend}>
                  <ProjectIcon as={OpenInNewIcon} />
                  <ProjectButtonTag>Live Demo</ProjectButtonTag>
                  </ProjectButton>
                )}
                <ProjectButton type='button' className='code' onClick={onClickCodeButton} isFrontend={isFrontend}>
                  <ProjectIcon as={CodeIcon} />
                  <ProjectButtonTag>Code</ProjectButtonTag>
                </ProjectButton>
              </ProjectsButtonContainer>
            </CardBack>
          </Card>
        </ProjectCardContainer>    
      )
    }}
  </PortfolioContext.Consumer>
  )
};

export default ProjectCard;
