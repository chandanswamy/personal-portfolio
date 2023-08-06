import styled from 'styled-components';


export const ProfileContainer = styled.div`
    min-height: calc(100vh - 45px);
    padding: 16px 16px 24px 16px;
    background-color: ${props => props.bgColor};
    @media screen and (min-width: 768px) {
        min-height: calc(100vh - 64px);
    }
`;

export const ProfileSectionSubOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }

`;

export const ProfileImage = styled.img`
  height: 77px;
  width: 77px;
  border-radius: 50px;
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
    border-radius: 100px;
  }
`;

export const ProfileIntro = styled.h3`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin: 18px;
  letter-spacing: 1.5px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 2px;
  }
`;

export const ProfileIntroSpan = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bolder;
  color: #fa0505;
  word-spacing: 3px;
  letter-spacing: 1px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 3px;
  }
`;

export const ProfileSectionSubTwo = styled.div`
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px) {
        margin-top: 32px;
        margin-bottom: 32px;
    }

`;

export const ProfileDescription = styled.p`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    color: ${props => props.textColor};
    font-size: 16px;
    font-weight: 500;
  @media screen and (min-width: 768px) {
    display: none;
  }

`;

export const CarouselProfileDescription = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
    display: block;
    width: 70%;
  }

`;

export const ResumePortfolioSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ResumePortfolioLink = styled.button`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.textColor};
  background-color: ${props => props.linkItemColor};
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin-right: 22px;
  height: 44px;
  border: 0px;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 64px;
    width: 250px;
    font-size: 22px;
    letter-spacing: 2px;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-20%);
  cursor: pointer;
  z-index: 1;
`;

export const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

export const ProfileIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const ProfileSocialMediaButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 28px;
  width: 28px;
  background-color: transparent;
  color: ${props => props.iconColor};
  border: 0px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  @media screen and (min-width: 768px) {
    height: 44px;
    width: 44px;
    &:hover{
      transform: scale(1.5);
    }
  }  
`;