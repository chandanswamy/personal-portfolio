import React, { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import ProjectCard from '../ProjectCard';
import Cookies from 'js-cookie';

import PortfolioContext from '../../context/PortfolioContext'

import {LoaderContainer, ErrorView, ProjectList, ProjectSection, ProjectsHeading, ErrorImg} from './style'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
};

class Projects extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    projectsList: [],
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    try {
      const apiUrl = 'https://gcs-deploy-node.onrender.com/projects';
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        method: 'GET',
        headers:{
          Authorization: `Bearer ${jwtToken}`
        }
      };
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        const fetchedData = await response.json();
        const updatedData = fetchedData.map((project) => ({
          projectId: project.project_id,
          projectTitle: project.project_title,
          projectCode: project.project_code,
          projectDemo: project.project_demo,
          projectDomain: project.project_domain,
          projectDescription: project.project_description,
          skills: project.skills,
          concept: project.concept,
        }));
        this.setState({
          projectsList: updatedData,
          apiStatus: apiStatusConstants.success,
        });
      } else {
        throw new Error('Failed to fetch projects');
      }
    } catch (error) {
      console.error(error);
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderLoadingView = () => (
    <LoaderContainer>
      <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="56" visible={true} />
    </LoaderContainer>
  );

  renderFailureView = () => (
    <PortfolioContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#fff' : '#000'
        return (
          <ErrorView textColor={textColor}>
            <p>Failed to fetch projects.<br /> Please try again later.</p>
            <ErrorImg src="https://res.cloudinary.com/chandanswamy/image/upload/v1687221011/No_data-bro-removebg-preview_kqvi13.png" />
          </ErrorView>
        )
      }}
    </PortfolioContext.Consumer>
    
  );

  renderSuccessView = () => {
    const { projectsList } = this.state;
   
    return(
    <PortfolioContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#fff' : '#000'
        return (
          <>
            <ProjectsHeading textColor={textColor}>My Projects</ProjectsHeading>
            <ProjectList>
              {projectsList.map((eachProject) => (
                <ProjectCard key={eachProject.projectId} projectDetails={eachProject} />
              ))}
            </ProjectList>
          </>
        )
      }}
    </PortfolioContext.Consumer>
    )
  };

  renderProjectsView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();

      case apiStatusConstants.failure:
        return this.renderFailureView();

      case apiStatusConstants.inProgress:
        return this.renderLoadingView();

      default:
        return null;
    }
  };

  render() {
    return (
      <PortfolioContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000' : '#fff'
          return(<ProjectSection bgColor={bgColor}>{this.renderProjectsView()}</ProjectSection>)
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Projects;
