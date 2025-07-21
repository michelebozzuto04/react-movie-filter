import './index.css'
import initial_movies from './data/movies'
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

  const [movies, setMovies] = useState(initial_movies);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchResults, setSearchResults] = useState(filteredMovies);

  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const filtered = movies.filter(movie => movie.genre === selectedGenre);

    selectedGenre === "All" ?
      setFilteredMovies(movies)
      :
      setFilteredMovies(filtered)

  }, [selectedGenre, movies, searchInput])

  useEffect(() => {
    const filtered = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));

    setSearchResults(filtered)

  }, [filteredMovies, searchInput])

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
        {searchResults.map((movie, index) => {
          return (
            <li key={index}>{movie.title}</li>
          )
        })}
      </ul>
    </>
  );
}

export default App
