import { useParams } from "react-router-dom";
import DetailsCard from "../components/detailsCard/DetailsCard";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";


function Details() {

    const [beerArray, setBeerArray] = useState([]);
    const params = useParams(); //Hole die ID von der URL
    let theID = params.id;  //Speichere diese in die Variable theID
    console.log(theID);

    //Hole die Daten aus der API und speichere dieses Array in beerArray
    //Sobald es alle Daten von fetch hat
    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(beerArrayAPI => {
                //Sobald es fertig geladen ist, wird mit der useState Funktion "setBeerArray"
                // Das HTML neu gerendert
                setBeerArray(beerArrayAPI);
                console.log(beerArrayAPI);
            });
    }, []);

    console.log(beerArray);
    //Durchsuche jedes Objekt vom Array und prüfe folgendes.
    // Bei true, Speichere dieses Objekt in die Variable
    let foundRightObject = beerArray.find((object) => {
        console.log("objectID", object._id);
        return object._id === theID;
    });
    console.log("Found", foundRightObject);
    console.log("theID", theID);


    return (
        <div>
            <DetailsCard
            // img_url={foundRightObject.image_url}
            // name={foundRightObject.name}
            // tagline={foundRightObject.tagline}
            // contributed={foundRightObject.contributed_by}
            // attenuation_level={foundRightObject.attenuation_level}
            // key={foundRightObject._id}
            // id={foundRightObject._id}
            />

        </div >
    );

}

export default Details;