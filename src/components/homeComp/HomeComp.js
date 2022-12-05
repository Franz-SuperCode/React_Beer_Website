import "./HomeComp.css";
import { Link } from "react-router-dom";



function HomeComp(props) {
    return (
        <article>
            <img alt="" src={props.imgFile} />
            <Link to={props.pageLink}>
                <h2>{props.headline}</h2>
            </Link>
            <p>{props.description}</p>
        </article>
    );
}

export default HomeComp;