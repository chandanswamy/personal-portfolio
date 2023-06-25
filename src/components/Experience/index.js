import React from 'react'
import ExperienceCard from '../ExperienceCard/index.js'

import {ExperienceContainer, ExperienceHeading} from './style.js'

const Experience = (props) => {
    const {jobDetails} = props
  return (
    <ExperienceContainer>
        <ExperienceHeading>My Experience</ExperienceHeading>
        <div>
            {jobDetails.map((eachItem) => (
                <ExperienceCard key={eachItem.id} jobDetails={eachItem} />
            ))}
        </div>
    </ExperienceContainer>
  )
}

export default Experience 