import React from "react";
import useWindowSize from "../../../utils/hook.windowsSize";
import FooterDestopk from "./components/footerDestopk";
import FooterMovil from "./components/footerMovil";
import { MOVIL } from "../../../constants";
import { matchMovil } from "../../../utils/general";

const Footer = () => {
    const size = useWindowSize();
    const isMovil = matchMovil(size.width, MOVIL);

    const render = isMovil ? <FooterMovil /> : <FooterDestopk />;
    return render;
};

export default Footer;
