import styled from "styled-components";

export const FooterBar = styled.footer`
    min-height: 45px;
    padding: 16px 4px 16px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #CCCCCC;
    background-color: ${(props) => (props.darktheme ? '#262626' : '#FAF9F6')};
    @media screen and (min-width: 768px) {
            height: 64px;
            padding-left: 32px;
            padding-right: 32px;
    }
`

export const FooterDetails = styled.p`
    margin: 0px;
    font-size: 12px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-weight: bolder;
    color: ${(props) => props.darktheme ? '#fff' : "#000"};
    @media screen and (min-width: 768px) {
            font-size: 14px;
            word-spacing: 4px;
    }
`

export const FooterIcons = styled.div`
    width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const FooterSocialMediaButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: 24px;
  width: 24px;
  background-color: transparent;
  color: ${props => props.iconColor};
  border: 0px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 26px;
    width: 26px;
  }
`