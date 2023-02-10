import React from "react";
import '../../App.css';
import '../funfacts.css';
import FactCard from "../FactCard";

export default function FunFacts () {
    return (
        <>
            
            <div className="fact-container">
                <h1>10 FUN OTTER FACTS!</h1>
                <p>Learn some neat perks that make otters special!</p>
            </div>
            <div className="funfact__container">
                <div className="fact__row">
                    <div className= "factCard margin__right">
                        <FactCard className ="factCard__div blue" factNumber = '1' fact = 'A group of sea otters huddled together in water is called a “raft.” Out of water, groups of otters are referred to as a "romp".' />
                    </div>
                    <div className="factCard">
                        <FactCard className = "factCard__div" factNumber = '2' fact = 'Sea otters have a pocket under their arm where they may store prey or a rock tool used to crack open their food.' />
                    </div>
                </div>
                <div className="fact__row">
                    <div className= "factCard margin__right">
                        <FactCard className = "factCard__div" factNumber = '3' fact = 'Sea otters need to rest 10-12 hours every day, and often prefer napping in kelp beds to stay anchored and safer from predators.' />
                    </div>
                    <div className="factCard">
                        <FactCard className ="factCard__div blue" factNumber = '4' fact = 'Sea otters have the thickest fur of any animal. Their fur contains between 600,000 to 1,000,000 hair follicles per square inch. Unlike most other marine mammals, otters lack a blubber layer.' />
                    </div>
                </div>
                <div className="fact__row">
                    <div className= "factCard margin__right">
                        <FactCard className ="factCard__div blue" factNumber = '5' fact = 'Sea otters eat 25 percent of their body weight in food every day. Sea otters’ diets include sea urchins, crabs, mussels, and clams, which they’re known to crack open with a rock and eat while floating in the water.' />
                    </div>
                    <div className="factCard">
                        <FactCard className = "factCard__div" factNumber = '6' fact = 'U.S. and international law protects threatened sea otters. Sea otters in the United States received additional protections with the passage of the Marine Mammal Protection Act and the Endangered Species Act in the 1970s.' />
                    </div>
                </div>
                <div className="fact__row">
                    <div className= "factCard margin__right">
                        <FactCard className = "factCard__div" factNumber = '7' fact = 'Most sea otters call Alaska home. Approximately 90 percent of the world’s sea otters live in coastal Alaska.' />
                    </div>
                    <div className="factCard">
                        <FactCard className ="factCard__div blue" factNumber = '8' fact = 'Otters have some interesting relatives. Otters are part of the Mustelidae family, which is a family of carnivorous mammals that includes skunks, weasels, wolverines, and badgers.' />
                    </div>
                </div>
                <div className="fact__row">
                    <div className= "factCard margin__right">
                        <FactCard className ="factCard__div blue" factNumber = '9' fact = 'Sea otters can have a pup any time of the year. Southern sea otters breed and pup year-round, while northern sea otter pups in Alaska are usually born in the spring.' />
                    </div>
                    <div className="factCard">
                        <FactCard className = "factCard__div" factNumber = '10' fact = 'Sea otters have been known to stay submerged for more than 5 minutes at a time. River otters, however, can hold their breath for up to 8 minutes.' />
                    </div>
                </div>
            </div>
        </>
    )
}