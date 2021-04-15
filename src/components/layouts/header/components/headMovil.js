import React from "react";
import { ContainerHead } from "../header.styles";
import { SmallButtonPromotion } from "../../../commons";
import { Grid, Box, Row } from "../../../../styles";

const HeadMovil = () => {
    return (
        <ContainerHead>
            <Row>
                <Grid xs={12}>
                    <img src={"assets/imgs/logo.png"} alt="tidal" />
                </Grid>
                <Grid xs={12}>
                    <Box pt={20}>
                        <SmallButtonPromotion />
                    </Box>
                </Grid>
            </Row>
        </ContainerHead>
    );
};
export default HeadMovil;
