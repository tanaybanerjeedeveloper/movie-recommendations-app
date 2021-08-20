import "./styles.css";
import React from "react";
import { useState } from "react";

const movieDB = {
  thriller: [
    { name: "Daredevil", rating: "4/5" },
    { name: "I saw the devil", rating: "5/5" },
    { name: "The Wailing", rating: "5/5" },
    { name: "Time to Hunt", rating: "4.5/5" },
    { name: "Memories of Murder", rating: "5/5" }
  ],
  drama: [
    { name: "Rush", rating: "5/5" },
    { name: "Warrior", rating: "5/5" },
    { name: "Persuit of Happyness", rating: "5/5" },
    { name: "Belaseshe", rating: "4.5/5" }
  ],
  friendship: [
    { name: "The Intouchables", rating: "5/5" },
    { name: "Dil Chahta Hai", rating: "5/5" }
  ]
};

const movieGenres = Object.keys(movieDB);

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const getMovieList = (genre) => {
    setMovieList(movieDB[genre]);
  };
  return (
    <div className="App">
      <h1>good movies</h1>
      <p>Checkout my favorite movies. Select a genre to get started</p>
      {movieGenres.map((genre) => {
        return (
          <button
            style={{
              cursor: "pointer",
              background: "#e50914",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              margin: "1rem 0.3rem",
              border: "1px solid black"
            }}
            key={genre}
            onClick={() => getMovieList(genre)}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieList.map((movie) => {
            return (
              <li
                key={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}>{movie.name}</div>
                <div style={{ fontSize: "smaller" }}>{movie.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div>
        <ul>
          <li
            style={{
              listStyle: "none",
              // border: "1px solid white",
              // borderRadius: ".5rem",
              width: "50%"
            }}
          >
            number 1
          </li>
          <li style={{ listStyle: "none" }}>number 2 </li>
        </ul>
      </div> */}
    </div>
  );
}
