import React, {useState, useEffect} from 'react'
import './App.css'
import SearchBar from './SearchBar'
// import Dropdown from './Dropdown'

function App() {
  const [movie, setMovie] = useState("");
  const url =
    "https://api.watchmode.com/v1/releases/?apiKey=n8Ydea7qeIQJTOI245Z3PPJjza5Txof6NsbmbxRC";
  const fetchMovie = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
  };


  return (
    <div className="App">
        
        <h2>Where can I watch this?</h2>
        <h3>Streaming info for all new releases. One place. One click. Updated daily.</h3>
        <SearchBar movies={movie.releases}/>
              </div>
  );
  }
  
export default App;
