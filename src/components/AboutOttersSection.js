import React from "react";
import './AboutOttersSection.css';

function AboutOttersSection() {
    return (
        <div className="aboutotters-div">
            <div className="aboutotters-scientific">
                    <h2>Otters</h2>
                    <h3><em>Scientific Name: Mustelidae</em></h3>
            </div>
            <div className="about-container">
                <div className="Left">
                    <img className="img1" src="/images/otter8.jpeg" alt="otter in river looking at camera" />
                </div>
                <div className="Right">
                    <p>The otter is a member of the weasel family, and can be found on every continent, minus Australia and Antarctica.
                    Otters are typically pretty small in size, with notable characteristics such as short ears and noses, elongated 
                    bodies, long tails, and soft, dense fur. Ranging from the small-clawed otter to the giant otter, there is a total 
                    of 13 different species of otter.</p>
                    <br />
                    <p>All otters are expert hunters that eat fish, crustaceans, and other critters. Sea otters have an ingenious method to open shellfish. 
                    A sea otter will float on its back, place a rock on its chest, then smash the mollusk down on it until it breaks open.</p>
                    <br />
                    <p>When it’s time to nap, sea otters entangle themselves in kelp so they don’t float away. 
                    They also sometimes intertwine their feet with another sea otter, so that they stay together.</p>
                    <br />
                    <p>River otters are especially playful, gamboling on land and splashing into rivers and streams. 
                    They learn to swim when they are about two months old, when their mother pushes them into the water.</p>
                    <br />
                    <p className="aboutotters-credit"><em>Information Credit to National Geographic</em></p>
               </div>
            </div>
        </div>
    )
}

export default AboutOttersSection;