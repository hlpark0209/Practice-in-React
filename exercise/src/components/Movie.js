import PropTypes from 'prop-types';

// Movie의 component가 해당 정보들을 parent component( MovieApp.js )로부터 받아옴
function Movie( {title_long, genres, summary, image}){
    return (
        <ul>
            <h3>{title_long}</h3>
            <span>Genres: {genres}</span>
            <p>{summary}</p>
            <img src={image} alt={title_long} />
        </ul>
    );
}


// prop Types설정
Movie.propTypes = {
    title_long: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default Movie;

