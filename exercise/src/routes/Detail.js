//id값을 가져오기 위해 useParams import
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

function Detail(){
    const { id } = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
            console.log(json);
    };
    // 각 영화에 해당하는 id값을 호출
    useEffect( () => {
        getMovie();
    }, []);
    return <h1>Detail</h1>;
}
export default Detail;