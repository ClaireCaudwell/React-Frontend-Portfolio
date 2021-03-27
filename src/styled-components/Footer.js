import styled from "styled-components/macro";
import { ProjectText } from "./ProjectList";

export const FooterContainer = styled.footer`
    background-color: #f4f4f4;
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterText = styled(ProjectText)`
    text-align: center;
    font-size: 15px;
    &.final-footer-text{
        font-size: 13px;
        margin: 10px 0 0;
    }
`;