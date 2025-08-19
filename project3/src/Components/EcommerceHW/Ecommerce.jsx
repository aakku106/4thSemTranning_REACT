/** @format */

import React from "react";

function Ecommerce() {
  const animeData = [
    {
      id: 1,
      name: "Naruto",
      image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    },
    {
      id: 2,
      name: "One Piece",
      image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
    },
    {
      id: 3,
      name: "Attack on Titan",
      image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
    },
    {
      id: 4,
      name: "Demon Slayer",
      image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    },
    {
      id: 5,
      name: "Fullmetal Alchemist: Brotherhood",
      image: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    },
  ];
  return (
    <div className="">
      {animeData.map((data, index) => (
        <>
          <img src={`${data.image}`} alt={data.name} key={data.id} />
          <h1>{data.name}</h1>
        </>
      ))}
    </div>
  );
}

export default Ecommerce;
