import "./DetailsCard.css";
import { Link, useParams } from "react-router-dom";

function DetailsCard(props) {
    console.log(props)

    return (
        <section>
            <img src={props.img_url} />
            <article>
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p>Created By {props.contributed}</p>
                <p>First Brewed: {props.first_brewed}</p>
                <p>Attenuation Level: {props.attenuation_level}</p>

                {/* <Link to={``}>Details</Link> */}
            </article>
        </section>
    );
};

export default DetailsCard;