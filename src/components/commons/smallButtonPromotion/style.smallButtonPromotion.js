import styled from "styled-components";
import { fontSize, fontColor, backgroundColors, fontWeight } from "../../../styles/constant.style";

const ButtonPromotion = styled.button`
    color: ${fontColor["primary"]};
    font-size: ${fontSize["h6"]};
    background: ${backgroundColors["secundary"]};
    border: none;
    cursor: pointer;
    font-weight: ${fontWeight["bold"]};
    border: none;
    cursor: pointer;
    font-weight: 900;
    width: 169px;
    height: 44px;
`;
export default ButtonPromotion;
