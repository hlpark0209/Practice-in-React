import { useEffect, useState } from 'react';

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState([]);
    useEffect( () => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        .then(response => response.json())
        .then(json => {
            setMovies(json.data.movies);
            setLoading(false);
        });
    },[]);
    console.log(movie);
    
    

    return (
        <div>
            <h2>3. Movie App ({movie.length})</h2>
            {loading ? <h4>Loading...</h4> : null}
        </div>
    );
}

export default MovieApp;