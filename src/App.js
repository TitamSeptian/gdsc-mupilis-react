import React, { useEffect,useState} from 'react';
import { Row,Container, Col } from 'react-bootstrap';
import Navbar from './components/myNavbar.js';
import SerachBar from './components/searchMovie.js';
import MovieCard from './components/movieCard.js';

function App() {
  const [movies, setMovie] = useState([]);
  useEffect(() => {
    fetchMovie()
  },[])
  const api_key = '1d2c306bdbd50caa1c4dc11301c06f4c';
  const fetchMovie = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
    const json = await data.json()
    console.log(json.results);
    setMovie(json.results);
  }
  return (
    <div>
      <Navbar />
      <SerachBar />
      <Container>
        <Row id="movie-list">
          {movies.map((movie,index) => (
          <Col md={4}>
            <MovieCard
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                title={movie.original_title}
                date={movie.release_date}
                id={movie.id}
                key={movie.id}
                 />
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
