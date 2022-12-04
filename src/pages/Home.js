import HomeComp from "../components/homeComp/HomeComp";
import imgBeer1 from "../assets/img/christin-hume-08tX2fsuSLg-unsplash.png";
import imgBeer2 from "../assets/img/proriat-hospitality-flENqflm6xU-unsplash.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";



function Home() {



    return (
        <section>

            <HomeComp
                imgFile={imgBeer1}
                headline="All Beers"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, consequatur!"
                pageLink="uebersicht"
            />



            <HomeComp
                imgFile={imgBeer2}
                headline="Random Beer"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, consequatur!"
                pageLink="random"
            />

        </section>
    );
};
export default Home;