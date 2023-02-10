import React from "react";
import '../../App.css';
import '../otterpedia.css';

export default function Otterpedia () {
    return (
        <>
            <div className="otterpedia-container">
                <h1 className="otterpedia">ABOUT THE AUTHOR</h1>
                <p>Who made Otterpedia and why otters?</p>
            </div>
            <div className="whyOtters__container">
                    <h1>Why Choose Otters? Why Otterpedia?</h1>
                    <br />
                    <div className="whyOtters__info">
                        <p>
                            Avery has always found otters to be super interesting and cute creatures. They have very goofy personalities 
                            and they are very loving animals, which reminds Avery of herself. Otters are such a fun species to see and 
                            learn about, so Avery wanted to create a site where people could enjoy the critters and getting to learn about 
                            them as well.
                        </p>
                    </div>
            </div>
            <div className="aboutauthor__container">
                <img className="authorImage" src="images/avery.jpeg" alt="author image" height="500" width="350"/>
                <div className="aboutauthor__info">
                    <h2>
                        About the Author - Avery
                    </h2>
                    <br />
                    <p>
                        Avery is a bright and goofy personality, and an all around animal lover. She is a dog mom to two adorable 
                        puppies, a Weimaraner named Inej and a rescue Shepherd mix named Braixen. When Avery isn't working as a 
                        software engineer at her job at the University, she's got a large passion for character design and 
                        illustration and spends lots of time learning new drawing skills as she curls up on the couch with her dogs 
                        and a good animated film or TV series. She may also be found playing video games such as League of 
                        Legends with friends or old college esports teammates.
                    </p>
                </div>
            </div>
            <br />
        </>
    )
}