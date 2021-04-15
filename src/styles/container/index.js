import styled from "styled-components";
import { MOVIL } from "../../constants";

const query = `@media (max-width: ${MOVIL}px)`;

const Container = styled.div`
    margin: 0 auto;
    padding: 0px 10% 0px 10%;
    ${query} {
        padding: 0px;
    }
`;
export default Container;
