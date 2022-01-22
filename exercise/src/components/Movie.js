import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Movie의 component가 해당 정보들을 parent component( MovieApp.js )로부터 받아옴
function Movie( {title, genres, summary, image, id}){
    return (
        <ul>
            <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
            <span>Genres: {genres}</span>
            <p>{summary}</p>
            <img src={image} alt={title} />
        </ul>
    );
}


// prop Types설정
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id : PropTypes.number.isRequired
}


export default Movie;

