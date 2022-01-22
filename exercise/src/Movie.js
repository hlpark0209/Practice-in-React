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

export default Movie;

