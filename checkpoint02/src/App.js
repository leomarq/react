import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import MovieListHeader from "./components/MovieListHeader";
import SearchBox from "./components/SearchBox";
import AddFavorito from "./components/AddFavorito";
import RemoverFavorito from "./components/RemoverFavorito";

const App = () => {
  const [movies, setMovies] = useState([])
  const [favourites, setFavourites] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d89831f0`;
    const response = await fetch(url);
    const responseJson = await response.json();
    
    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
    setFavourites(newFavouriteList);
  }

  return (
    <>
      <Header />
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeader header="Filmes"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="row">
          <MovieList 
            movies={movies} 
            handleFavouritesClick={addFavouriteMovie} 
            favouriteComponent = {AddFavorito}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeader header="Favoritos"/>
        </div>
        <div className="row">
          <MovieList 
            movies={favourites} 
            handleFavouritesClick={removeFavouriteMovie} 
            favouriteComponent = {RemoverFavorito}
          />
        </div>
      </div>
    </>
  );
}

export default App;
