import './App.css';
import React ,{ useState } from 'react';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import {movieData} from './movieData';

import AddMovie from './Components/AddMovie';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies,setMovies]=useState(movieData);
  const handleAdd =(form) => {
   setMovies ([...movies,form])
  }
  
  const [search, setSearch] = useState("")
  const handleSearch= (input) => {
    setSearch(input)
  }

  const [rate, setRate] = useState(0)
  const handleRate= (rating) => {
    setRate(rating)
    
  }
  console.log(movies.rating >= rate);
  console.log(movies.rating , rate);
  return (
    <div className="App">
      <NavBar handleRate={handleRate} handleSearch={handleSearch} />
      <div className="main">
        <MovieList
          movies={movies.filter(
            (elt) =>
              elt.name.toLowerCase().includes(search.toLowerCase().trim()) &&
              elt.rating >= rate
              
          )}
          
        />
      </div>
      <AddMovie handleAdd={handleAdd} />
      
    </div>
    
  );
}

export default App;
