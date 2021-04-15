import styled from "styled-components";
import { fontSize, fontColor, backgroundColors, fontWeight } from "../../../styles/constant.style";
import { MOVIL } from "../../../constants";

const query = `@media (max-width: ${MOVIL}px)`;

const ButtonPromotion = styled.button`
    color: ${fontColor["secundary"]};
    font-size: ${fontSize["h4"]};
    background: ${backgroundColors["green"]};
    border: none;
    cursor: pointer;
    font-weight: ${fontWeight["bold"]};
    width: 347px;
    height: 86px;
    ${query} {
        width: 100%;
    }
`;
export default ButtonPromotion;
