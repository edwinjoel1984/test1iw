import React from "react";
import { Grid, Row, Typography } from "../../../../styles/";
import ContainerFooter from "../footer.style";

const FooterMovil = () => {
    return (
        <ContainerFooter>
            <Row>
                <Grid xs={4}>
                    <img src={"assets/imgs/logo.png"} alt="tidal" />
                </Grid>
                <Grid xs={8}>
                    <Typography color="secundary">©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
            </Row>
        </ContainerFooter>
    );
};

export default FooterMovil;
