import styled from "styled-components";

export const SkillsHeading = styled.h1`
    font-size: 18px;
    color: ${props => props.textColor};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    @media screen and (min-width: 767px) {
    text-align: center;
    font-size: 22px;
    letter-spacing: 3px;
  }

`;

export const SkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scrollbar-width: thin;
  background-color: ${props => props.bgColor};
  margin-top: 12px;
  margin-bottom: 12px;
  @media screen and (min-width: 767px) {
    justify-content: space-between;
    overflow-x: auto;
  }
`;

export const EachSkillCard = styled.div`
  height: 100px;
  padding-left: 4px;
  padding-right: 4px;
  margin-right: 4px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SkillIconLink = styled.button`
  text-decoration: none;
  background-color: ${props => props.bgColor};
  color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 66px;
  width: 66px;
  border: 1.5px dotted;
  border-color: ${props => props.borderColor};
  border-radius: 50px;
  animation: spin 2s linear forwards;
  cursor: pointer;
  .skill-icon{
    font-size: 45px;
    }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }
`;

export const SkillIconDesc = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
  font-weight: bold;
  margin: 1px;
  color: ${props => props.textColor};
`;