import './index.css'
import movies from './data/movies'
import { useEffect, useState } from 'react';

const genres = [
  "All",
  "Fantascienza",
  "Horror",
  "Thriller",
  "Romantico",
  "Azione"
];

function App() {

  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [movieList, setMovieList] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState(movieList);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState(filteredMovies);

  useEffect(() => {
    selectedGenre === "All" ?
      setMovieList(movies)
      :
      setMovieList(filteredMovies.filter(movie => movie.genre === selectedGenre))
  }, [selectedGenre])

  useEffect(() => {
    filteredMovies.map(movie => movie.title.toLowerCase())
    setMovieList(filteredMovies.filter(movie => movie.title.includes(searchInput.toLowerCase())))
  }, [searchInput])

  console.log(searchInput)

  return (
    <>
      <label>
        Scegli un genere:
        <select
          value={selectedGenre}
          onChange={e => setSelectedGenre(event.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <input type='text' value={searchInput} onChange={e => setSearchInput(e.target.value)} />
      <hr />
      <p>Your selected: {selectedGenre}</p>
      <ul>
        {movieList.map((movie, index) => {
          return (
            <li key={index}>{movie.title}</li>
          )
        })}
      </ul>
    </>
  );
}

export default App
