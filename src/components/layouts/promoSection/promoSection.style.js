import styled from "styled-components";
import { MOVIL } from "../../../constants";

const query = `@media (max-width: ${MOVIL}px)`;

export const PromotionPicture = styled.div`
    text-align: center;
`;

export const ContainerPromo = styled.div`
    background: none;
    padding: 60px 20px 0px 0px;
    margin: 0px 0px 0px 0px;
    background-image: none;
    ${query} {
        text-align:center;
    }
`;
