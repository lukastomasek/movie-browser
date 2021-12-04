import Navigation from "./pages/Navigation";


function App() {

  const getMovies = async()=>{
    const KEY = "your_key";

    const res = await fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${KEY}`);
    const movies = await res.json();

    if(movies){

      console.log(movies.genres.title);
    }

  };

  return (
    <div className="App">
      <Navigation/>
    </div>
  );
}

export default App;
