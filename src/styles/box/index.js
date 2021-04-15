import styled from "styled-components";
import { backgroundCover, backgroundColors } from "../constant.style";

const Box = styled.div`
    background: ${props => getBackground(props)};
    padding: ${props => getPadding(props)};
    margin: ${props => getMargin(props)};
    background-image: ${props => getBackgroundImg(props)};
    ${props => (props.backgroundImage ? backgroundCover : "")};
`;
export default Box;

const getBackground = props => {
    return props?.background ? backgroundColors[props.background] : "none";
};

const getPadding = props => {
    const padding = props.p ? props.p : 0;
    const paddingTop = props.pt ? props.pt : padding;
    const paddingRight = props.pr ? props.pr : padding;
    const paddingBottom = props.pb ? props.pb : padding;
    const paddingLeft = props.pl ? props.pl : padding;

    return paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px";
};

const getMargin = props => {
    const margin = props.m ? props.m : 0;
    const marginTop = props.mt ? props.mt : margin;
    const marginRight = props.mr ? props.mr : margin;
    const marginBottom = props.mb ? props.mb : margin;
    const marginLeft = props.ml ? props.mt : margin;

    return marginTop + "px " + marginRight + "px " + marginBottom + "px " + marginLeft + "px";
};

const getBackgroundImg = props => (props.backgroundImage ? `url("${props.backgroundImage}")` : "none");
