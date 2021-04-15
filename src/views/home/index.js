import React from "react";
import { Header, Footer, Brands, PromoSection, StartSection, SocialWidget } from "../../components/layouts/";
import { Container } from "../../styles";
const Home = () => {
    return (
        <>
            <Header />
            <Brands />
            <Container>
                <SocialWidget />
                <PromoSection />
            </Container>
            <StartSection />
            <Footer />
        </>
    );
};

export default Home;
