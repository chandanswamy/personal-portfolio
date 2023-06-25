import React from 'react'
import PortFolioContext from '../../context/PortfolioContext';

import {Institution, City, Course, Dates, Field, Description, Score, DescriptionItem, EduCard, CourseDetails, CourseImage, CourseImageContainer, CourseDetailsContainer} from './style'

const EducationCard = (props) => {
    const {eduDetails} = props 
    const {id, institution,city,course,field, score,scoreType,joiningYear,graduationYear,description, imageUrl} = eduDetails
    const ispercentSymbol = scoreType === "PERCENT"
    const activeScoreTab = score !== null

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
                            <Course>{course}</Course>
                            <Dates>{`${joiningYear} - ${graduationYear}`}</Dates>
                        </CourseDetails>
                        {activeScoreTab ? (
                            <CourseDetails>
                                <Field>{field}</Field>
                                {ispercentSymbol && <Score>{`${score} %`}</Score>}
                                {!ispercentSymbol && <Score>{`${score} CGPA`}</Score>}
                            </CourseDetails>
                        ) : null}
                        <Description>
                            {description.map((eachItem, index) => (
                            <DescriptionItem key={index}>{eachItem}</DescriptionItem>
                            ))}
                        </Description>
                        </CourseDetailsContainer>
                        <CourseImageContainer>
                            <CourseImage src={imageUrl} alt={`${course}`} />
                        </CourseImageContainer>
                    </EduCard>
                    )
            }}
        </PortFolioContext.Consumer>
      );
    };

export default EducationCard