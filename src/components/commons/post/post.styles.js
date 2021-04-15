import styled from "styled-components";
import { fontSize, backgroundColors, fontWeight, fontColor } from "../../../styles/constant.style";

export const ContainerPost = styled.div`
    padding: 20px;
    font-size: ${fontSize["h6"]};
    background: ${backgroundColors["secundary"]};
    border-radius: 5px;
    font-weight: ${fontWeight["light"]};
`;

export const Date = styled.div`
    line-heigth: 30px;
    font-size: ${fontSize["h6"]};
    color: ${fontColor["secundary"]};
    padding: 10px 0px;
`;

export const Author = styled.div`
    line-heigth: 27px;
    font-size: ${fontSize["h6"]};
    font-weight: ${fontWeight["medium"]};
    color: ${fontColor["purple"]};
    padding: 10px 0px;
`;
