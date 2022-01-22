import { oneOfType } from 'prop-types';
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
            {loading ? <h4>Loading...</h4> : 
                <div>
                    {movie.map( item => (
                        <ul key={item.id}>
                            <h3><a href={item.url}>{item.title_long}</a></h3>
                            <span>Genres: {item.genres}</span>
                            <p>{item.summary}</p>
                            <img src={item.medium_cover_image}/ >
                        </ul>
                    ))}
                </div>        
            }

        </div>
    );
}

export default MovieApp;