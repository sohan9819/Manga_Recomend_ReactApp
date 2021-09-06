import "./styles.css";
import React, { useState } from "react";

const mangaDict = {
  Adventure: [
    { "One Piece": { rating: 9.5, numberOfSeasons: 4 } },
    { "Fairy Tail": { rating: 8, numberOfSeasons: 1 } },
    { "Hunter X Hunter": { rating: 8.5, numberOfSeasons: 6 } },
    { "Kino's Journey": { rating: 8, numberOfSeasons: 2 } },
    { "Spice and Wolf": { rating: 9, numberOfSeasons: 4 } }
  ],
  Comedy: [
    { Gintama: { rating: 9, numberOfSeasons: 4 } },
    { "The Melancholy of Haruhi Suzumiya": { rating: 9, numberOfSeasons: 4 } },
    { "The Devil Is a Part-Timer!": { rating: 9, numberOfSeasons: 4 } },
    { "Daily Lives of High School Boys": { rating: 9, numberOfSeasons: 4 } },
    { Nichijou: { rating: 9, numberOfSeasons: 4 } }
  ],
  Drama: [
    { Clannad: { rating: 9.3, numberOfSeasons: 2 } },
    {
      "Anohana: The Flower We Saw That Day": { rating: 9, numberOfSeasons: 4 }
    },
    { "Your Lie in April": { rating: 9, numberOfSeasons: 1 } },
    { Kanon: { rating: 8.7, numberOfSeasons: 1 } },
    { "Little Busters!": { rating: 8.5, numberOfSeasons: 2 } }
  ],
  Slice_of_Life: [
    { Barakamon: { rating: 7, numberOfSeasons: 14 } },
    { "Non Non Biyori": { rating: 6, numberOfSeasons: 11 } },
    { "Koufuku Graffiti": { rating: 8, numberOfSeasons: 7 } },
    { "Lucky Star": { rating: 9, numberOfSeasons: 6 } },
    { "Wagnaria!!": { rating: 9.5, numberOfSeasons: "41+" } }
  ],
  Fantasy: [
    { "No Game No Life": { rating: 9.5, numberOfSeasons: 14 } },
    { "Nanatsu no Taizai": { rating: 8, numberOfSeasons: 32 } },
    { Inuyasha: { rating: 7, numberOfSeasons: 2 } },
    { Escaflowne: { rating: 7.5, numberOfSeasons: 3 } },
    { Slayers: { rating: 9, numberOfSeasons: 1 } }
  ],
  Horror: [
    { "Junji Ito Collection": { rating: 8, numberOfSeasons: 14 } },
    { "Parasyte -the maxim-": { rating: 9.5, numberOfSeasons: 22 } },
    { Another: { rating: 9, numberOfSeasons: 3 } },
    { "School-Live!": { rating: 8, numberOfSeasons: 4 } },
    { "Hell Girl": { rating: 9.5, numberOfSeasons: 2 } }
  ],
  Psychological: [
    { "Death Note": { rating: 10, numberOfSeasons: 1 } },
    { "Mirai Nikki": { rating: 9, numberOfSeasons: 4 } },
    { "Zetsuen no Tempest": { rating: 8.5, numberOfSeasons: 6 } },
    { Monster: { rating: 9, numberOfSeasons: 2 } },
    { "Paranoia Agent": { rating: 8, numberOfSeasons: 10 } }
  ]
};

const genreList = Object.keys(mangaDict);

export default function App() {
  var [selectedGenre, setselectedGenre] = useState([]);
  var [genre, setgenre] = useState("");
  // var [manga , setmanga] = useState([]);

  function liclickHandler(item) {
    setgenre(item);
    setselectedGenre(mangaDict[item]);
    console.log(selectedGenre);
  }

  return (
    <div className="App">
      <h1>Welcome to manga recommender</h1>
      <h2>Click on the genre from the list below</h2>
      <ul>
        {genreList.map((item) => {
          return (
            <li
              id="genre"
              onClick={() => {
                liclickHandler(item);
              }}
            >
              {" "}
              {item}{" "}
            </li>
          );
        })}
      </ul>
      <h2 id="genreHeding">{genre}</h2>
      <ul id="mangaList">
        {selectedGenre.map((item) => {
          const mainName = Object.keys(item);
          console.log(mainName);
          console.log(item[mainName]["rating"]);
          return (
            <li id="manga">
              {mainName}
              <h5>Rating : {item[mainName]["rating"]} / 10</h5>
              <h5>Number_Of_Seasons : {item[mainName]["numberOfSeasons"]}</h5>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
