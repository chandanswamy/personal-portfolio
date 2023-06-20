import styled from "styled-components";
import {FiMenu} from 'react-icons/fi'

export const Menu = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: bolder;
`

export const MenuIcon = styled(FiMenu)`
    font-size: 24px;
    color: ${(props) => props.darkTheme ? '#fff' : "#000"};
`
