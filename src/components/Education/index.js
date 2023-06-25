import React from 'react'
import EducationCard from '../EducationCard/index.js'

import {EducationHeading, EducationContainer} from './style.js'

const Education = (props) => {
    const {educationalData} = props
  return (
    <EducationContainer>
        <EducationHeading>My Education</EducationHeading>
        <div>
            {educationalData.map((eachItem) => (
                <EducationCard key={eachItem.id} eduDetails={eachItem} />
            ))}
        </div>
    </EducationContainer>
  )
}

export default Education