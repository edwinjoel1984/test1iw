import React from "react";
import { Grid, Row, Typography } from "../../../../styles/";
import ContainerFooter from "../footer.style";

const FooterDestopk = () => {
    return (
        <ContainerFooter>
            <Row>
                <Grid lg={4} xs={12}>
                    <Typography>©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
                <Grid lg={4} xs={12}>
                    <Typography>©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
                <Grid lg={4} xs={12}>
                    <Typography>©2019 Tidal Traffic. All rights reserved.</Typography>
                </Grid>
            </Row>
        </ContainerFooter>
    );
};

export default FooterDestopk;
