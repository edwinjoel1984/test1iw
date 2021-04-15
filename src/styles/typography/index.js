import styled, { css } from "styled-components";
import { fontSize, fontColor, fontWeight, fontStyleLight, fontStyleBold, fontStyleStartSection, fontStyleBoldMobile, fontStyleLightMobile } from "../constant.style";

const Typography = styled.p`
    color: ${props => getColor(props)};
    font-family: Raleway;
    ${props => getFontStyle(props)};
`;
export default Typography;

const getFontStyle = props => {
    if (props.fontStyle)
        switch (props.fontStyle) {
            case "light":
                return fontStyleLight;
            case "bold":
                return fontStyleBold;
            case "boldMobile":
                return fontStyleBoldMobile;
            case "lightMobile":
                return fontStyleLightMobile;
            case "startSection":
                return fontStyleStartSection;
            default:
                return css`
                    font-size: ${getFontSize(props)};
                    font-weight: ${getWeight(props)};
                `;
        }
};

const getColor = props => (props.color ? fontColor[props.color] : fontColor["primary"]);

const getWeight = props => (props.weight ? fontWeight[props.weight] : fontWeight["light"]);

const getFontSize = props => (props.variant ? fontSize[props.variant] : fontSize["1rem"]);
