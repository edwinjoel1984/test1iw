import React from "react";
import { Grid, Row, Typography } from "../../../../styles/";
import { ButtonPromotion } from "../../../commons/";
import { ContainerBtn, Banner } from "../startSections.style";

const StartSectionDestopk = () => {
    return (
        <Row>
            <Grid lg={12} xs={12}>
                <Banner>
                    <Typography color="secundary" fontStyle="startSection">
                        Find Out YOUR Online Advertising Readiness Rating!
                    </Typography>
                </Banner>
                <ContainerBtn>
                    <ButtonPromotion />
                </ContainerBtn>
            </Grid>
        </Row>
    );
};

export default StartSectionDestopk;
