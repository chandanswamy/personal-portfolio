import React, { Component } from 'react'

import {AboutRoute} from './style'

import PortFolioContext from '../../context/PortfolioContext'
import Header from '../Header'
import Education from '../Education'
import Experience from '../Experience'
import Footer from '../Footer'

const educationData = [
  {
    id: 1,
    institution: "R.V.R. & J.C. College of Engineering",
    city: "Guntur",
    course: "Bachelor of Technology",
    field: "Mechanical Engineering",
    score: 7.88,
    scoreType: "CGPA",
    joiningYear: 2017,
    graduationYear: 2021,
    imageUrl: "https://res.cloudinary.com/chandanswamy/image/upload/v1687708984/btech_anhlx6.png",
    description: [
      "I successfully completed my Bachelor of Technology degree in Mechanical Engineering from R.V.R. & J.C. College of Engineering, Guntur.",
      "With a commendable CGPA of 7.88, I acquired a comprehensive understanding of mechanical principles and their practical applications. ",
      "Throughout my academic journey, I actively participated in various projects, honing my problem-solving skills and fostering a passion for innovation. I also engaged in extracurricular activities, including leadership roles in student organizations, which enhanced my teamwork and communication abilities."],
  },
  {
    id: 2,
    institution: "Narayana Junior College",
    city: "Vijayawada",
    course: "Intermediate",
    field: "Maths Physics Chemistry",
    score: 94,
    scoreType: "PERCENT",
    joiningYear: 2015,
    graduationYear: 2017,
    imageUrl: "https://res.cloudinary.com/chandanswamy/image/upload/v1687708979/college_vpqqdz.png",
    description: [
      "During my Intermediate studies at Narayana Junior College, Vijayawada, I excelled in Mathematics, Physics, and Chemistry.",
      " With a remarkable score of 94%, I showcased strong analytical and problem-solving abilities. This academic journey cultivated my curiosity, critical thinking, and perseverance."],
  },
  {
    id: 3,
    institution: "Nalanda Vidya Niketan",
    city: "Vijayawada",
    course: "CBSE",
    field: "Class 10",
    score: 10,
    scoreType: "CGPA",
    joiningYear: 2014,
    graduationYear: 2015,
    imageUrl: "https://res.cloudinary.com/chandanswamy/image/upload/v1687708979/school_adgrig.png",
    description: [
      "At Nalanda Vidya Niketan, Vijayawada, I completed my Class 10 education under the CBSE curriculum with utmost dedication, Achieving a perfect CGPA of 10",
      "Alongside my academic pursuits, my passion for cricket thrived as I actively participated in inter-school tournaments, developing teamwork, strategic thinking, and leadership skills.",
      "These diverse experiences, encompassing both sports and extracurricular activities, have shaped me into a well-rounded individual and laid the foundation for my subsequent educational achievements."],
  },
];

const jobDetailsList = [
  {
    id: 1,
    institution: "Cognizant Technology Solutions",
    city: "Hyderabad",
    role: "Programmer Analyst",
    joiningYear: "Aug 2021",
    graduationYear: "Sep 2022",
    imageUrl: "https://res.cloudinary.com/chandanswamy/image/upload/v1687714497/cognizant_q3wapq.png",
    jobDescription: "I worked as a manual tester for a pharmacy benefit management (PBM) project for CVS client. My responsibilities included:",
    jobResponsibilities: [
      "Analyzing data to identify trends and patterns, and using that analysis to make recommendations for improvements to the PBM system.",
      "Developing test cases and executing them to ensure that the PBM system was functioning correctly.",
      "Collaborating with developers and project managers to identify and resolve issues and bugs in the system.",
      "Communicating with stakeholders to provide updates on the progress of the project and to gather feedback on the PBM system.",
      "Participating in team meetings to discuss project goals, strategies, and progress.",
      "I have acted as a mentor for ten of the newcomers and guided them through a mini-project that was completed successfully."
    ]
  },
]

class About extends Component {
  state = {educationalData: educationData, jobDetails: jobDetailsList}
  
  render(){
  return (
    <>
      <Header />
      <PortFolioContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {educationalData, jobDetails} = this.state

          const bgColor = isDarkTheme ? '#000000' : '#fff'
          const textColor = isDarkTheme ? '#fff' : '#000'

          return(
            <AboutRoute textColor={textColor} bgColor={bgColor}>
              <Experience jobDetails={jobDetails} />
              <Education educationalData={educationalData} />            
            </AboutRoute>
          )
        }}
      </PortFolioContext.Consumer>
      <Footer />
    </>
  )
  }
}

export default About

