export const playAudio = (isPlaying, audioRef) => {
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
};
