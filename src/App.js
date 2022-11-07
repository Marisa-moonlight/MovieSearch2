import { useEffect, useState } from "react";
import Movielist from "./movielist";
import Searchmovie from "./searchbar";
import "./App.css";

const App = () =>{
  const [movies, setMovies]= useState([]);
  const [searchmovie, setSearchmovie] = useState('')
  const Requestmovie = async()=>{

    const url=`http://www.omdbapi.com/?s=${searchmovie}&apikey=ca402a93`;
    
    const response = await fetch(url);
    const data = await response.json();
    if(data.Search){
      console.log(data.Search);
      setMovies(data.Search);
    }


  }

  useEffect(() => {
    Requestmovie(searchmovie);
  },[searchmovie]);

    return(
      <div className="App">
        <div className="moviesearch">
            <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie} />
        </div>

        <div>
          <Movielist movies={movies}/>
        </div>
      </div>
    );
}

export default App;