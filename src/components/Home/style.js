import styled from "styled-components";

const whiteBg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC"
const blackBg = "https://res.cloudinary.com/chandanswamy/image/upload/v1687118322/1687118294160__s0azig.png"

export const HomeRoute = styled.div`
    min-height: calc(100vh - 45px);
    color: ${(props) => (props.darkTheme ? '#fff' : '#999')}; 
    font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.darkTheme ? `url(${blackBg})` : `url(${whiteBg})`)};
    background-repeat: repeat;
    background-position: 0 0; 

    @media screen and (min-width: 768px) {
      min-height: calc(100vh - 64px);
    }
    
    -webkit-animation: bg-scrolling-reverse .92s infinite; /* Safari 4+ */
    -moz-animation:    bg-scrolling-reverse .92s infinite; /* Fx 5+ */
    -o-animation:      bg-scrolling-reverse .92s infinite; /* Opera 12+ */
    animation:         bg-scrolling-reverse .92s infinite; /* IE 10+ */
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function:    linear;
    -o-animation-timing-function:      linear;
    animation-timing-function:         linear;

    @-webkit-keyframes bg-scrolling-reverse {
      100% { background-position: 50px 50px; }
    }
    @-moz-keyframes    bg-scrolling-reverse {
      100% { background-position: 50px 50px; }
    }
    @-o-keyframes      bg-scrolling-reverse {
      100% { background-position: 50px 50px; }
    }
    @keyframes         bg-scrolling-reverse {
      100% { background-position: 50px 50px; }
    }

    @-webkit-keyframes bg-scrolling {
      0% { background-position: 50px 50px; }
    }
    @-moz-keyframes    bg-scrolling {
      0% { background-position: 50px 50px; }
    }
    @-o-keyframes      bg-scrolling {
      0% { background-position: 50px 50px; }
    }
    @keyframes         bg-scrolling {
      0% { background-position: 50px 50px; }
    }
`

export const HomeContent = styled.h1`
  margin: 0px;
  padding: 12px 16px 12px 16px;
  text-align: left;
  max-width: 900px;
  @media screen and (min-width: 768px){
    text-align: center;
  }
`