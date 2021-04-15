import styled from "styled-components";
import { MOVIL } from "../../../constants";
import { backgroundColors } from "../../../styles/constant.style";

const query = `@media (max-width: ${MOVIL}px)`;

export const ContainerInfo = styled.div`
    padding: 20px;
    ${query} {
        padding: 15px;
        margin: 0 10%;
        background: ${backgroundColors["primary"]};
        text-align: center;
    }
`;

export const ContainerHead = styled.div`
    ${query} {
        padding: 20px;
        margin-bottom: 30px;
        background: ${backgroundColors["primary"]};
        text-align: center;
    }
`;

export const ContainerBtn = styled.div`
    float: right;
    padding-right: 50px;
    padding-top: 50px;
`;

export const ContainerShadow = styled.div`
    text-align: center;
    position: absolute;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.3);
    padding: 20px;
`;
