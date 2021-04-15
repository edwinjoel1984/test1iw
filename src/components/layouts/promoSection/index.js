import React from "react";
import { Grid, Box, Row, Typography } from "../../../styles/";
import { PromotionPicture, ContainerPromo } from "./promoSection.style";
import { MOVIL } from "../../../constants";
import { matchMovil } from "../../../utils/general";
import useWindowSize from "../../../utils/hook.windowsSize";

const PromoSection = () => {
    const size = useWindowSize();
    const isMovil = matchMovil(size.width, MOVIL);
    return (
        <Row justify={"center"}>
            <Grid lg={6} xs={12}>
                <ContainerPromo>
                    <Typography size="14" color="primary">
                        WHY IT IS IMPORTANT
                    </Typography>
                    <Typography color="primary" fontStyle="bold">
                        Knowing Your Online Ads
                        <br />
                        Readiness Raiting...
                    </Typography>
                    <Typography fontStyle="light" color="primary">
                        ...will help you understand just how bullish you should be with your ad spend and where your blind spots are. When it comes to online advertising the more informed and ready you are, the more effective your advertising will be
                        (and the greater your chances of a healthy Return on your Ad Spend (ROAS)). Find Out your Online Advertising Readiness Rating so you can make more money and avoid risks with your online advertising.
                    </Typography>
                </ContainerPromo>
            </Grid>
            <Grid lg={6} xs={12}>
                <Box pt={40} pb={80}>
                    <PromotionPicture>
                        <img width={isMovil ? "300px" : "auto"} src={"assets/imgs/promotion.png"} alt="tidal" />
                    </PromotionPicture>
                </Box>
            </Grid>
        </Row>
    );
};

export default PromoSection;
