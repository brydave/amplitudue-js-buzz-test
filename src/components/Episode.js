import React from 'react';

function Episode(props) {
  return(
    <div class="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index={props.index}>
      <div class="song-now-playing-icon-container">
        <div class="play-button-container">{props.index}</div>
        <img class="now-playing" src={props.episode.cover_art_url} alt="now playing"/>
      </div>
      <div class="song-meta-data">
        <span class="song-title">{props.episode.name}</span>
        <span class="song-artist">{props.episode.artist}</span>
      </div>
      <span class="song-duration">3:30</span>
    </div>
  )
}

export { Episode }