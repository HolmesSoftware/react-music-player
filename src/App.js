import React, { useRef, useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/App.scss";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //Ref / grabing a html elememnt
  const audioRef = useRef(null);
  const requestRef = useRef();

  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationPercent, setAnimationPercent] = useState(0);
  //Set the current song infomation
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  //this is taking the current time from the event on the audio tag
  //uses onTimeUpdate on the audio tag to send updated metadata whenever the audio changes
  //uses onLoadedMetaData on the audio tag to retreave the metadata when the page loads
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage
    setAnimationPercent((current / duration) * 100);
    // const roundedCurrent = Math.round(current);
    // const roundedDuration = Math.round(duration);
    // const animationPercentage = Math.round(
    //   (roundedCurrent / roundedDuration) * 100
    // );
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
    });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        animationPercent={animationPercent}
        requestRef={requestRef}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
