import React from "react";
import './OtterThreats.css';

function OtterThreats() {
    return (
        <div className="otterthreats-div">
            <div className="otterthreats-heading">
                    <h2>Threats</h2>
                    <h3><em>What puts otters at risk?</em></h3>
            </div>
            <div className="threat-container">
                <div className="Left2">
                    <img className="otterstogether" src="/images/otter9.webp" alt="otter in river looking at camera" />
                </div>
                <div className="Right2">
                    <p>Otters and their mustelid relatives were once hunted extensively for their fur, many to the point of near extinction. 
                    Despite regulations designed to protect them, many species remain at risk from pollution and habitat loss. 
                    The sea otter is listed as endangered on the IUCN Red List, pressured by pollution, pesticides, and conflicts with fishermen who kill them for eating their fish. 
                    Asian otter species also face threats from the illegal pet trade.</p>
                    <br />
                    <p>
                    Sea otters are also particularly vulnerable to oil contamination because oiling drastically reduces the insulating and water-repellent properties of their fur. 
                    Unlike most marine mammals, sea otters don’t have an insulating layer of blubber to keep them warm so they must depend on their exceptionally thick, water-resistant fur to stay warm. 
                    Upon exposure, crude oil rapidly penetrates the fur and destroys the air layer that is trapped next to the skin and which provides 70% of the insulating properties of the fur. 
                    The loss of thermal insulation can quickly cause the otter to die of hypothermia. In addition to the damaging physical effects of oil contamination, 
                    the toxicological effects from ingestion and inhalation can lead to severe, long-term organ damage and other potentially life threatening conditions. 
                    As the Exxon Valdez disaster made so painfully clear, the single greatest threat to sea otters is an oil spill. 
                    One large oil spill off the Central Coast of California could be catastrophic, with the potential of driving the entire southern sea otter population into extinction.
                    </p>
                    <p className="otterthreats-credit"><em>Information Credit to National Geographic</em></p>
               </div>
            </div>
        </div>
    )
}

export default OtterThreats;