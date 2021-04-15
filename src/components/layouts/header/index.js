import React from "react";
import useWindowSize from "../../../utils/hook.windowsSize";
import HeaderDestopk from "./components/headerDestopk";
import HeaderMovil from "./components/headerMovil";
import { MOVIL } from "../../../constants";
import { matchMovil } from "../../../utils/general";

const Header = () => {
    const size = useWindowSize();
    const isMovil = matchMovil(size.width, MOVIL);

    const render = isMovil ? <HeaderMovil /> : <HeaderDestopk />;
    return render;
};

export default Header;
