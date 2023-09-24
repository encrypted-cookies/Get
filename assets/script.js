var aud = document.getElementById("Song1").children[0];
  var isPlaying = false;
  aud.pause();

  function playPause() {
    if (isPlaying) {
      aud.pause();
    } else {
      aud.play();
    }
    isPlaying = !isPlaying;
 
}