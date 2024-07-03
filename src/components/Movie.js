import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, coverImg, year, summary, genres}){
    return(
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>({year})
            </h2>
            <img src={coverImg} alt={title}/>
            <ul>
                {genres.map(g=><li key={g}>{g}</li>)}
            </ul>
            {/* <p>{summary}</p> */}
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;