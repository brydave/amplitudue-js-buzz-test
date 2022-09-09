import React from 'react';

function Episode(props) {
  return(
    <div className="song amplitude-song-container amplitude-play-pause" data-amplitude-song-index={props.index}>
      <div className="song-now-playing-icon-container">
        <div className="play-button-container">{props.index}</div>
        <img className="now-playing" src={props.episode.cover_art_url} alt="now playing"/>
      </div>
      <div className="song-meta-data">
        <span className="song-title">{props.episode.name}</span>
        <span className="song-artist">{props.episode.artist}</span>
      </div>
      <span className="song-duration">3:30</span>
    </div>
  )
}

export { Episode }