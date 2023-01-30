import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards () {
    return (
        <div className="cards">
            <h1>Locations where you can see otters:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/morrobay.jpeg" 
                        text="The protected inlet of Morro Bay serves as habitat for about 40 sea otters, primarily females caring for pups.
                        Both the Morro Bay Embarcadero and Estuary provide safety for otters to find food, raise their young, and avoid predators like sharks."
                        label="Morro Bay"
                        />
                        <CardItem
                        src="images/otter2.jpeg" 
                        text="Head out to Montaña de Oro State Park to find the Bluff Trail, a 3.4-mile out-and-back hike with ocean views. 
                        Corallina Cove provides protection for sea otters that can often be seen from the trail."
                        label="Los Osos"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/otter.jpeg" 
                        text="For an easy otter-spotting hike, try the 3-mile trail at Estero Bluffs State Park. 
                        This comfortable path leads parallel to the coastline, where sea otters nest and hunt among the kelp forests."
                        label="Cayucos"
                        />
                        <CardItem
                        src="images/otter1.jpeg" 
                        text="A walk along the Baywood Pier (also called the 2nd Street Pier) can result in a sea otter sighting, especially in the early morning.
                        Watch for kelp beds, where Southern sea otters prefer to float, feed, and groom their young."
                        label="Baywood"
                        />
                        <CardItem
                        src="images/otter3.jpeg" 
                        text="The otherworldly setting of Moonstone Beach serves as a viewing point for sea otters in Cambria. 
                        Better yet, hike the Moonstone Beach Trail, an out-and-back 3-mile walk that provides a high vantage point and tide pool exploring."
                        label="Cambria"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;