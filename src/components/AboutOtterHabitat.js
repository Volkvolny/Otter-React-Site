import React from "react";
import './AboutOtterHabitat.css';

function AboutOtterHabitat () {
    return (
        <div className="ottershabitat-div">
            <div className="ottershabitat-heading">
                <h2 className="text-right">Otter Habitat and Young</h2>
                <h3><em>Daily otter life</em></h3>
            </div>
            <div className="habitat-container">
                <div className="Right1">
                    <img className="babyOtters" src="/images/otter9.jpeg" alt="baby otters together" />
                </div>
                <div className="Left1">
                    <p>Webbed feet and powerful tails, which act like rudders, make otters strong swimmers. Their nostrils and ears close to keep water out, and waterproof fur keeps them warm. 
                    They must carefully groom their fur and furry undercoat to keep them clean and sealed off to water, because they’re not covered in a fatty layer like other seagoing creatures. 
                    Otters have the densest fur of any animal—as many as a million hairs per square inch in places.</p>
                    <br />
                    <p>Most otter species come ashore to give birth in dens, which sometimes have been used by other animals such as beavers. 
                    Sea otters are the exception, giving birth in the water. Baby otters, called pups or kittens, stay with their mothers until they’re up to a year old, or until she has another litter. 
                    River otters don’t breed until they’re at least five years old.</p>
                    <br />
                    <p>
                    At birth, baby otters only weigh about two ounces and measure between 22 and 24 inches long. 
                    They are also born completely blind and won't open their eyes until they are 30 to 40 days old.
                    </p>
                    <br />
                    <p className="ottershabitat-credit"><em>Information Credit to National Geographic, SeaOtters, and A-Z Animals</em></p>
                </div>
            </div>
        </div>
    )
}

export default AboutOtterHabitat;