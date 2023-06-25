import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 24px 32px 24px;
  background-color: ${props => props.bgColor};
  min-height: calc(100vh - 45px);
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 64px);
    padding: 64px 48px 64px 48px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: none;
  width: 80%;
  @media screen and (min-width: 768px) {
    width: 80%;
    max-width: 500px;
  }
`

export const NotFoundVideosImage = styled.img`
  width: 80%;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`
export const NotFoundVideosHeading = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: bolder;
  margin: 12px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin: 12px;
  color: ${props => props.noteColor};
  text-align: center;
`

export const HomeButton = styled.button`
    height: 50px;
    width: 150px;
    margin: 12px;
    background-color: #9656a1;
    cursor: pointer;
    color: ${props => props.noteColor};
    font-size: 16px;
    font-weight: 500;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    border: 0px;
    border-radius: 4px;
`