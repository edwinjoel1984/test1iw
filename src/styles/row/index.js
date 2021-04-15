import styled from "styled-components";

const Row = styled.div`
    flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
    justify-content: ${props => (props.justify ? props.justify : "initial")};
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;
export default Row;
