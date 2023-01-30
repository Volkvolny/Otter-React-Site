import React from "react";
import '../../App.css';
import WhatAre from '../WhatAreSection';
import AboutOttersSection from "../AboutOttersSection";
import AboutOtterHabitat from "../AboutOtterHabitat";
import OtterThreats from "../OtterThreats";
import '../whatareotters.css';

export default function WhatAreOtters () {
    return (
    <>
        <WhatAre />
        <div className="Container">
            <div className="Row">
                <div className="Content">
                    <div className="Row">
                        <AboutOttersSection />
                    </div>
                    <hr />
                    <div className="Row">
                        <AboutOtterHabitat />
                    </div>
                    <hr />
                    <div className="Row">
                        <OtterThreats />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}