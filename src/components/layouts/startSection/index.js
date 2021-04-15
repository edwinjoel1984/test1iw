import React from "react";
import useWindowSize from "../../../utils/hook.windowsSize";
import StartSectionDestopk from "./components/startSectionDestopk";
import StartSectionMovil from "./components/startSectionMovil";
import { MOVIL } from "../../../constants";
import { matchMovil } from "../../../utils/general";

const StartSection = () => {
    const size = useWindowSize();
    const isMovil = matchMovil(size.width, MOVIL);

    const render = isMovil ? <StartSectionMovil /> : <StartSectionDestopk />;
    return render;
};

export default StartSection;
