import React from "react";

const LibrarySong = ({
  song,
  allSongs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
}) => {
  //this is for song changes, waits until song is loaded then plays
  //song wouldnt play on song change without this bc it was trying to play before song load.
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
  const songSelectHandler = () => {
    setCurrentSong(song);
    audioRef.current.play();
  };

  return (
    <div onClick={songSelectHandler} className="library-song">
      <img alt={song.name + " cover image"} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
