import React from "react";
import { Grid, Row } from "../../../styles/";
import brands from "./data";
import BrandsStyle from "./brands.style";

const Brands = () => {
    return (
        <BrandsStyle>
            <Row justify={"center"}>
                {brands.map((brand, index) => (
                    <Grid lg={2} key={index}>
                        <Brand brand={brand} />
                    </Grid>
                ))}
            </Row>
        </BrandsStyle>
    );
};

export default Brands;

const Brand = ({ brand }) => {
    return <img width="75%" src={brand.path} alt={brand.name} />;
};
