import React from "react";
import { playAudio } from "../util";
const LibrarySong = ({
  song,
  allSongs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //sets song baised on which one is clicked on, updates Active state
  const songSelectHandler = () => {
    setCurrentSong(song);
    //this is checking to see which song is selected and changing the active to true or false baised on if its been selected or not.
    const newSongs = allSongs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      } //eoElse
    }); //eoSongSelectHandler
    setSongs(newSongs);
  };

  //to play the audio, calls function in util.js
  playAudio(isPlaying, audioRef);

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name + " cover image"} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
