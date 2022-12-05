import "./UebersichtCard.css";
import { Link } from "react-router-dom";

function UbersichtCard(props) {

    return (
        <section className="ubersichtCard">
            <img src={props.img_url} />
            <article>
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p>Created By {props.contributed}</p>
                {/* <Link to="/details">Details</Link> */}
                <Link to={`/details/${props.id}`}>Details</Link>
            </article>
        </section>
    );
};

export default UbersichtCard;