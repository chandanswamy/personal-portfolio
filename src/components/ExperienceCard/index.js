import React from 'react'
import PortFolioContext from '../../context/PortfolioContext';

import {Institution, City, Course, Dates, Field, Description, DescriptionItem, EduCard, CourseDetails, CourseImage, CourseImageContainer, CourseDetailsContainer} from './style'

const ExperienceCard = (props) => {
    const {jobDetails} = props 
    const {id, institution,city, role, joiningYear, graduationYear, jobDescription, jobResponsibilities, imageUrl} = jobDetails

    const orderOfContainer = id%2 === 0 ? 1 : 0
    
      return ( 
        
        <PortFolioContext.Consumer>
            {value => {
                const {isDarkTheme} = value
                const bgColor = isDarkTheme ? '#000000' : '#fff'
                const textColor = isDarkTheme ? '#fff' : '#000'
                return(
                    <EduCard bgColor={bgColor} textColor={textColor}>
                        <CourseDetailsContainer order={orderOfContainer}>
                        <Institution>{`${institution} - `}<City>{city}</City></Institution>                        
                        <CourseDetails>
                            <Course>{role}</Course>
                            <Dates>{`${joiningYear} - ${graduationYear}`}</Dates>
                        </CourseDetails>
                        <Field>{jobDescription}</Field>
                        <Description>
                            {jobResponsibilities.map((eachItem, index) => (
                            <DescriptionItem key={index}>{eachItem}</DescriptionItem>
                            ))}
                        </Description>
                        </CourseDetailsContainer>
                        <CourseImageContainer>
                            <CourseImage src={imageUrl} alt={`${role}`} />
                        </CourseImageContainer>
                    </EduCard>
                    )
            }}
        </PortFolioContext.Consumer>
      );
    };

export default ExperienceCard