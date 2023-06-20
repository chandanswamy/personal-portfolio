import React from 'react';
import { FiNavigation } from 'react-icons/fi';
import { BsFileEarmarkCode } from 'react-icons/bs';
import PortfolioContext from '../../context/PortfolioContext'


import { ProjectCardContainer, ProjectButton, ProjectButtonTag, ProjectConcepts, ProjectDescription, ProjectDetailsContainer, ProjectIcon, ProjectSkills, ProjectTitle, ProjectTitleContainer, ProjectsButtonContainer } from './style';

const ProjectCard = (props) => {
  const { projectDetails } = props;
  const { projectTitle, projectCode, projectDemo, projectDomain, projectDescription, skills, concept } = projectDetails;
  const isFrontend = projectDomain === 'Frontend';

  const onClickDemoButton = () => {
    window.location.href = projectDemo;
  };

  const onClickCodeButton = () => {
    window.location.href = projectCode;
  };
  return(
  <PortfolioContext.Consumer>
    {value => {
      const {isDarkTheme} = value;
      const bgColor = isDarkTheme ? '#000' : '#fff'
      const textColor = isDarkTheme ? '#fff' : '#000'
      return (
        <ProjectCardContainer bgColor={bgColor} textColor={textColor}>
          <ProjectTitleContainer>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <ProjectDescription>{projectDescription}</ProjectDescription>
          </ProjectTitleContainer>
          <ProjectDetailsContainer>
            <ProjectConcepts>{`Concepts : ${concept}`}</ProjectConcepts>
            <ProjectSkills>{`Skills : ${skills}`}</ProjectSkills>
          </ProjectDetailsContainer>
          <ProjectsButtonContainer>
            {isFrontend && (
              <ProjectButton type='button' className='code' onClick={onClickDemoButton} isFrontend={isFrontend}>
                <ProjectIcon as={FiNavigation} />
                <ProjectButtonTag>Live Demo</ProjectButtonTag>
              </ProjectButton>
            )}
            <ProjectButton type='button' className='code' onClick={onClickCodeButton} isFrontend={isFrontend}>
              <ProjectIcon as={BsFileEarmarkCode} />
              <ProjectButtonTag>Code</ProjectButtonTag>
            </ProjectButton>
          </ProjectsButtonContainer>
        </ProjectCardContainer>        
      )
    }}
  </PortfolioContext.Consumer>
  )
};

export default ProjectCard;
