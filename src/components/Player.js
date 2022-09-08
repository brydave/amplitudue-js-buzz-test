import React, { useEffect } from 'react';
import Amplitude from "amplitudejs";
import { Episode } from "./Episode"
import playlistArray from "./playlist"

function Player() {
  useEffect(() => { 
    Amplitude.init({
      songs: playlistArray,
    });
  })

  return(
    <div id="blue-playlist-container">
      {/* <div className="mt-10 bg-blue-300">OI!</div>
      <span className="amplitude-play">Play</span>
      <span className="amplitude-pause">Pause</span>
      <span className="amplitude-play" data-amplitude-song-index="{song_index}"></span> */}

			<div id="amplitude-player">

				<div id="amplitude-left">
					<img data-amplitude-song-info="cover_art_url" className="album-art" alt="Album Art"/>
          <div className="amplitude-visualization" id="large-visualization">

            </div>
					<div id="player-left-bottom">
						<div id="time-container">
							<span className="current-time">
								<span className="amplitude-current-minutes" ></span>:<span className="amplitude-current-seconds"></span>
							</span>
							<div id="progress-container">
								<div className="amplitude-wave-form">

                        </div>
                <input type="range" className="amplitude-song-slider"/>
								<progress id="song-played-progress" className="amplitude-song-played-progress"></progress>
								<progress id="song-buffered-progress" className="amplitude-buffered-progress" value="0"></progress>
							</div>
							<span className="duration">
								<span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
							</span>
						</div>

						<div id="control-container">
							<div id="repeat-container">
								<div className="amplitude-repeat" id="repeat"></div>
								<div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle"></div>
							</div>

							<div id="central-control-container">
								<div id="central-controls">
									<div className="amplitude-prev" id="previous"></div>
									<div className="amplitude-play-pause" id="play-pause"></div>
									<div className="amplitude-next" id="next"></div>
								</div>
							</div>

							<div id="volume-container">
								<div className="volume-controls">
									<div className="amplitude-mute amplitude-not-muted"></div>
									<input type="range" className="amplitude-volume-slider"/>
									<div className="ms-range-fix"></div>
								</div>
								<div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle-right"></div>
							</div>
						</div>

						<div id="meta-container">
							<span data-amplitude-song-info="name" className="song-name"></span>

							<div className="song-artist-album">
								<span data-amplitude-song-info="artist"></span>
								<span data-amplitude-song-info="album"></span>
							</div>
						</div>
					</div>
				</div>
        <div id="amplitude-right">{ 
          playlistArray.map((episode, index) => {
            return <Episode episode={episode} key={index} index={index} />
          })
        }</div>  
      </div>
    </div>
  )
}

export { Player }