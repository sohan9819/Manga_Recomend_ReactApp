import "./styles.css";
import React, { useState } from "react";

const mangaDict = {
  Adventure: [
    "One Piece",
    "Fairy Tail",
    "Hunter X Hunter",
    "Kino's Journey",
    "Spice and Wolf"
  ],
  Comedy: [
    "Gintama",
    "The Melancholy of Haruhi Suzumiya",
    "The Devil Is a Part-Timer!",
    "Daily Lives of High School Boys",
    "Nichijou"
  ],
  Drama: [
    "Clannad",
    "Anohana: The Flower We Saw That Day",
    "Your Lie in April",
    "Kanon",
    "Little Busters!"
  ],
  Slice_of_Life: [
    "Barakamon",
    "Non Non Biyori",
    "Koufuku Graffiti",
    "Lucky Star",
    "Wagnaria!!"
  ],
  Fantasy: [
    "No Game No Life",
    "Nanatsu no Taizai",
    "Inuyasha",
    "Escaflowne",
    "Slayers"
  ],
  Horror: [
    "Junji Ito Collection",
    "Parasyte -the maxim-",
    "Another",
    "School-Live!",
    "Hell Girl"
  ],
  Psychological: [
    "Death Note",
    "Mirai Nikki",
    "Zetsuen no Tempest",
    "Monster",
    "Paranoia Agent"
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
      <ul>
        {selectedGenre.map((item) => {
          return <li id="manga"> {item} </li>;
        })}
      </ul>
    </div>
  );
}
