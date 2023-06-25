import styled from "styled-components";

export const AboutRoute = styled.div`
    min-height: calc(100vh - 45px);
    padding: 16px 16px 24px 16px;
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
        min-height: calc(100vh - 64px);
    }
`;