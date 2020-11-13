import React, { useEffect, useLayoutEffect, useState } from "react";
import { playAudio } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrentSong,
  setSongs,
  animationPercent,
  requestRef,
}) => {
  //UseEffects
  //Changes the active value when changing the song through the song skip buttons.
  useEffect(() => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
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
    });
    setSongs(newSongs);
  }, [currentSong]);

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  //converting the time from seconds (137 seconds) to mm:ss
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //uses onChange to call the draghandler and pass through event
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    //keep the entire object the same but update just current time
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //pulling the index from the array of objects to know which song is next and which one was last
  // makes sure the index doesnt go bigger or smaller than whats avalible
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else if (direction === "skip-back") {
      //if we are at index 0 | return is to prevent the setCurrentSong out of the If doesnt run. could add an else to the if and remove the return. same thing.
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        //added bc of the return
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    //plays song audio after skip
    playAudio(isPlaying, audioRef);
  }; //eoskipTrackHandler

  //this is for the animation on the time display/track
  useLayoutEffect(() => {
    const animate = (time) => {
      if (isPlaying) {
        setStyleTransform({
          transform: `translateX(${animationPercent}%)`,
          MozTransform: `translateX(${animationPercent}%)` /* Firefox 4 */,
          WebkitTransform: `translateX(${animationPercent}%)` /* Safari and Chrome */,
          OTransform: `translateX(${animationPercent}%)` /* Opera */,
          msTransform: `translateX(${animationPercent}%)` /* Explorer 10 */,
        });

        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, animationPercent]);
  //sets the styke for the track
  const [styleTransform, setStyleTransform] = useState({});

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={styleTransform} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipTrackHandler("skip-forward")}
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
