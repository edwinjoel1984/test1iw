import styled from "styled-components";
const mobile = `@media (max-width: 995px)`;

const BrandsStyle = styled.div`
    padding: 20px;
    ${mobile} {
        display: none;
    }
`;
export default BrandsStyle;
