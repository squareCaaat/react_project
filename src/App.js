import Button from "./button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async ()=>{
    const item = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )).json();
    setMovies(item.data.movies);
    setLoading(false);
  };
  useEffect(()=>{
    getMovies();
    console.log(movies);
  },[]);
  return (
    <div>
      {loading? <strong>Loading...</strong>:
        <div>
          {movies.map((movie)=>(
            <div key={movie.id}>
              <h2>{movie.title} ({movie.year})</h2>
              <img src={movie.medium_cover_image}/>
              <ul>
                {movie.genres.map(g=><li key={g}>{g}</li>)}
              </ul>
              <p>{movie.summary}</p>
            </div>
          ))}  
        </div>
      }
    </div>
  );
}

export default App;
