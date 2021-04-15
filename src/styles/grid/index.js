import styled from "styled-components";
import { MOVIL } from "../../constants";

const query = `@media (max-width: ${MOVIL}px)`;

const Grid = styled.section`
    width: ${props => getSize(props.lg)}%;
    position: relative;
    float: left;
    ${query} {
        width: ${props => getSize(props.xs)}%;
    }
`;
export default Grid;

const getSize = size => (size ? (size * 100) / 12 : 100);
