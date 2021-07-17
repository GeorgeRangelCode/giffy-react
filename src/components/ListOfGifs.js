import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then(gifs => {
        setLoading(false);
        setGifs(gifs);
      });
    },
    [keyword],
  );

  if (loading) return <i>Cargando</i>;

  return (
    <>
      {gifs.map(singleGif => (
        <Gif key={singleGif.id} id={singleGif.id} title={singleGif.title} url={singleGif.url} />
      ))}
    </>
  );
}
