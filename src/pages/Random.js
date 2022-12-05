import { Link, useParams } from "react-router-dom";
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


    let random = Number(Math.floor((Math.random()) * 42));
    console.log(beerArray[random]?.name);

    // ================ . Random Beer =========================
    return (
        <div>
            <DetailsCard
                img_url={beerArray[random]?.image_url}
                name={beerArray[random]?.name}
                tagline={beerArray[random]?.tagline}
                contributed={beerArray[random]?.contributed_by}
                attenuation_level={beerArray[random]?.attenuation_level}
                key={beerArray[random]?._id}
                id={beerArray[random]?._id}
            />

            <Link to="/"><button>BACK</button></Link>
            <Navbar />
        </div >
    );

}

export default Details;