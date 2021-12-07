import Home from "./pages/Home";
import {useEffect, useState} from 'react';

function App() {
  const [movies, setMovies] = useState({});
  const [apiLoaded, setApi] = useState(false);


  const getMovies = async()=>{
    const KEY = "<<your key>>";
    
    try{

      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`);
      const data = await res.json();

      if(data){
        setMovies(data);
        // console.log(data)
        setApi(true);
      }
    }
    catch(err){
      console.log(err.message);
      setApi(false);
    }
  };

  useEffect(() => { 
    getMovies();
  },[])

  return (
    <div className="App">
      {apiLoaded && <Home data={movies}/>}
    </div>
  );
}

export default App;
