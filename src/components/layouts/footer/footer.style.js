import styled from "styled-components";
import { MOVIL } from "../../../constants";
import { backgroundColors } from "../../../styles/constant.style";

const query = `@media (max-width: ${MOVIL}px)`;

const ContainerFooter = styled.div`
    background: #faf9fc;
    text-align: center;
    color: #333333;
    font-size: 12px;
    padding: 20px;
    margin-top: 40px;
    ${query} {
        background: ${backgroundColors["primary"]};
    }
`;
export default ContainerFooter;
