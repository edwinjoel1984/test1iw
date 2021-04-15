import React from "react";
import { Grid, Box, Row, Typography } from "../../../../styles";
import { ButtonPromotion } from "../../../commons";
import { ContainerInfo } from "../header.styles";
import HeadMovil from "./headMovil";

const HeaderMovil = () => {
    return (
        <Row reverse={true}>
            <Grid xs={12}>
                <Box backgroundImage={"assets/imgs/background_header.jpg"} pb={30}>
                    <HeadMovil className="test" />
                    <ContainerInfo>
                        <Typography color="secundary" fontStyle="boldMobile">
                            What’s Your <br />
                            Online Advertising
                            <br />
                            Readiness Rating?
                        </Typography>
                        <Typography fontStyle="lightMobile" color="secundary">
                            When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.
                        </Typography>
                        <ButtonPromotion />
                        <Typography size="20" color="secundary">
                            Learn more about Readiness Raitings
                        </Typography>
                    </ContainerInfo>
                </Box>
            </Grid>
        </Row>
    );
};

export default HeaderMovil;
