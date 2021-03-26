import styled from "styled-components/macro";
import { ProjectText } from "./ProjectList";

export const FooterContainer = styled.footer`
    background-color: rgb(244, 244, 244);
    width: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterText = styled(ProjectText)`
    text-align: center;
    font-size: 15px;
`;