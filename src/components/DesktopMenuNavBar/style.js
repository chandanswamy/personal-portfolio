import styled from "styled-components";
import {FiMenu} from 'react-icons/fi'

export const Menu = styled.div`
    font-family: 'Rubik', sans-serif;
`

export const MenuIcon = styled(FiMenu)`    
    @media screen and (min-width: 768px) {
        font-size: 24px;
        color: ${(props) => props.darkTheme ? '#fff' : "#000"};
        order: 1;
    }
`