import React, { Component } from 'react';

import PortfolioContext from '../../context/PortfolioContext'
import Skills from '../Skills'
import Projects from '../Projects';

import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareProfile from '../ShareProfile'

import Typed from 'typed.js';
import { 
  ProfileContainer,
  ProfileSectionSubOne,
  ProfileImage, 
  ProfileIntro, 
  ProfileSectionSubTwo,
  ProfileIntroSpan,
  ResumePortfolioSection,
  ResumePortfolioLink,
  ProfileDescription,
  CarouselProfileDescription,
  PrevArrow,
  NextArrow,
  ProfileIcons,
  ProfileSocialMediaButton
} from './style';

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const socialMediaIcons = [
  {
    iconName: <WhatsAppIcon sx={{fontSize: '28px'}}/>,
    iconLink: 'https://wa.me/+919491558919/',
    color: '#25D366'
  },
  {
    iconName: <InstagramIcon sx={{fontSize: '28px'}} />,
    iconLink: 'https://www.instagram.com/_chandanswamy_/',
    color: '#E4405F'
  },
  {
    iconName: <GitHubIcon sx={{fontSize: '28px'}} />,
    iconLink: 'https://github.com/chandanswamy',
    color: '#690694'
  },
  {
    iconName: <LinkedInIcon sx={{fontSize: '28px'}} />,
    iconLink: 'https://www.linkedin.com/in/chandanswamy/',
    color: '#0A66C2'
  }
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
    this.typed = null;
  }

  state = {socialMediaIconsList: socialMediaIcons}

  componentDidMount() {
    this.typed = new Typed(this.el.current, {
      strings: ['FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'FULLSTACK DEVELOPER'],
      typeSpeed: 100,
    });
  }

  componentWillUnmount() {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  openPdf = () => {
    // Provide the path or URL of the PDF file to open
    const pdfUrl = './ChandanSwamyGanuga.pdf';

    // Open the PDF file in a new tab or window
    window.open(pdfUrl, '_blank');
  };

  renderReactCarousel = () => {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      prevArrow: <PrevArrow><FiChevronLeft /></PrevArrow>,
      nextArrow: <NextArrow><FiChevronRight /></NextArrow>,
    }

    return(
      <div className='react-carousel'>
      <Slider {...settings}>
          <div className='carousel one'>
          <p className='carousel-text'>As a passionate fresher in Web Development, I am deeply enthusiastic
             about building exceptional web experiences. With a strong foundation
             in both Frontend and Backend Technologies, I possess a well-rounded skill 
             set that enables me to tackle diverse challenges in the field. On the Frontend, 
             I have expertise in HTML, CSS, and JavaScript, allowing me to create visually 
             appealing and interactive user interfaces. I am proficient in modern frameworks 
             and libraries like React etc., enabling me to develop dynamic and responsive web applications.
          </p>
          </div>
          <div className='carousel two'>
          <p className='carousel-text'>In the Backend realm, I have hands-on experience with server-side programming languages 
            such as Node.js, Python, and SQL. I am adept at building RESTful APIs, managing databases, 
            and implementing secure authentication and authorization mechanisms. I have worked with 
            frameworks like Express.js, empowering me to develop robust and scalable server-side solutions. 
            I have a keen eye for detail and strive for clean and efficient code that ensures optimal performance.
          </p>
          </div>
          <div className='carousel three'>
          <p className='carousel-text'>Beyond technical skills, I am a proactive learner and a strong problem solver. I stay updated 
            with the latest industry trends and emerging technologies, ensuring that my knowledge remains 
            relevant and adaptable. I am constantly exploring new tools and methodologies to enhance my 
            development workflow. I am eager to contribute to meaningful projects, collaborate with talented 
            individuals, and continuously enhance my skill set. I value teamwork and effective communication, 
            as I believe they are crucial for successful project delivery.
          </p>
          </div>
          <div className='carousel four'>
          <p className='carousel-text'>I am seeking opportunities where I can apply my skills, learn from experienced professionals, 
            and make a positive impact. I am open to new challenges and eager to embrace continuous growth 
            and improvement. I am confident that with my passion, dedication, and willingness to learn, I 
            will be able to contribute effectively to the field of Web Development and make a meaningful 
            difference. Thank you for considering my application. I look forward to the opportunity of contributing 
            my skills and enthusiasm to a dynamic and forward-thinking organization.
          </p>
          </div>
        </Slider>
      </div>
    )
  }

  navigateToSocialAcc = (socialMediaLink) => {
    window.open(socialMediaLink)
  }

  render() {
    const profileImageUrl = "https://res.cloudinary.com/chandanswamy/image/upload/v1652021155/IMG_20200220_202943_306_ecjncp.jpg"

    
    return(
      <PortfolioContext.Consumer>
        {value => {
          const {isDarkTheme} = value;
          const {socialMediaIconsList} = this.state
          const bgColor = isDarkTheme ? '#000' : '#fff'
          const textColor = isDarkTheme ? '#fff' : '#000'
          const linkItemColor = isDarkTheme ? '#262626' : '#efefef'

          return (
            <ProfileContainer bgColor={bgColor}>
              <div className='profile-section'>
                <ProfileSectionSubOne>
                  <ProfileImage src={profileImageUrl} alt='profile'/>
                  <div>  
                    <ProfileIntro textColor={textColor} >Hi, I'm an Aspiring<br /><ProfileIntroSpan ref={this.el} /></ProfileIntro>
                    <ProfileIcons>
                      {socialMediaIconsList.map((socialMedia, index) => (
                        <ProfileSocialMediaButton onClick={() => this.navigateToSocialAcc(socialMedia.iconLink)} iconColor={socialMedia.color} key={index}>{socialMedia.iconName}</ProfileSocialMediaButton>
                      ))}
                    </ProfileIcons>
                  </div>            
                </ProfileSectionSubOne>
                <ProfileSectionSubTwo>
                  <ProfileDescription textColor={textColor}>
                    As a passionate fresher in Web Development,
                    I excel in Frontend and Backend Technologies.
                    Eager to contribute and grow with hands-on experience. 
                  </ProfileDescription>
                  <CarouselProfileDescription>{this.renderReactCarousel()}</CarouselProfileDescription>        
                </ProfileSectionSubTwo>
              </div>
              <ResumePortfolioSection>
                <ResumePortfolioLink textColor={textColor} linkItemColor={linkItemColor} onClick={this.openPdf} >
                  RESUME
                </ResumePortfolioLink>
                <ResumePortfolioLink textColor={textColor} linkItemColor={linkItemColor}>
                  <ShareProfile />
                </ResumePortfolioLink>
              </ResumePortfolioSection>
              <Skills />
              <Projects />
            </ProfileContainer>
          )
        }}
      </PortfolioContext.Consumer>
    )
  }
}

export default Profile;