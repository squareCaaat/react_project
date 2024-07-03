import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [dmovie, setDmovie] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const item = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDmovie(item.data.movie);
        setLoading(false);
        console.log(item);
    }
    useEffect(()=>{
        getMovie();
    }, []);

    return (
        <div>
            {loading? <strong>Loading...</strong>:(
                <div>
                    <h1>{dmovie.title_long}</h1>
                    <img src={dmovie.medium_cover_image} alt={dmovie.title}/>
                    <p>Run Time: {dmovie.runtime?`${dmovie.runtime}`:"no information"}</p>
                    <p>Rating: {dmovie.rating}</p>
                    <ul>
                        {dmovie.genres.map(g=><li key={g}>{g}</li>)}
                    </ul>
                    <p>{dmovie.description_full}</p>
                </div>    
            )}
        </div>
    );
}

export default Detail;