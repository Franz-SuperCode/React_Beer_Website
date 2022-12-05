import { useEffect, useState } from "react";
import UebersichtCard from "../components/UebersichtCard/UebersichtCard";
import Navbar from "../components/navbar/Navbar";



function Uebersicht() {

    const [beerArray, setBeerArray] = useState([]);

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then(BeerArrayAPI => {
                //Sobald es fertig geladen ist, wird mit der useState Funktion "setBeerArray"
                // Das HTML neu gerendert
                setBeerArray(BeerArrayAPI);
                console.log(BeerArrayAPI);

            });
    }, []);

    { console.log("Das wird vor dem useEffect ausgeführt da das fetch asynchr. läuft") }


    return (
        <div className="uebersicht">
            {beerArray.map((beerObject) => {
                return <UebersichtCard
                    alt={beerObject.name}
                    img_url={beerObject.image_url}
                    name={beerObject.name}
                    tagline={beerObject.tagline}
                    contributed={beerObject.contributed_by}
                    key={beerObject._id}
                    id={beerObject._id} />
            })}
            <Navbar />
        </div >
    );
}

export default Uebersicht;