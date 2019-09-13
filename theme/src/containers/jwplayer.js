import React from 'react';
import ReactJWPlayer from 'react-jw-player';
import PropTypes from 'prop-types';

const displayName = 'JWPlayerContainer';

const propTypes = {
	//playlist: PropTypes.string.isRequired,
	//playerScript: PropTypes.string.isRequired
};
const autoPlay = false;
class JWPlayerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoTitle: this.props.videoTitle,
			selectedEpisode: this.props.selectedEpisode
		};

		this.onAdPlay = this.onAdPlay.bind(this);
		this.onReady = this.onReady.bind(this);
		this.onVideoLoad = this.onVideoLoad.bind(this);

		// each instance of <ReactJWPlayer> needs a unique id.
		// we randomly generate it here and assign to the container instance.
		this.playerId = 'jplayer'; // someFunctionToRandomlyGenerateId();
	}
	onReady(event) {
		// interact with JW Player API here
		const player = window.jwplayer(this.playerId);
	}
	onAdPlay(event) {
		// track the ad play here
	}
	onVideoLoad(event) {
		this.setState({
			videoTitle: event.item.description // this only works with json feeds!
		});
	}
	render() {
		return (
			<div className="react-jw-player-container">
				<h1>{this.state.videoTitle}</h1>
				<ReactJWPlayer
					playlist={this.props.playlist}
					licenseKey="xUmk7xXkEZ8tjVWsDJZnt/IPAvzBu8rBAqpIWg=="
					onAdPlay={this.onAdPlay}
					onReady={this.onReady}
					onVideoLoad={this.onVideoLoad}
					playerId={this.playerId} // bring in the randomly generated playerId
					playerScript="https://s3-us-west-2.amazonaws.com/pnstream/Videos/jwplayer.js"
					file="https://s3-us-west-2.amazonaws.com/pnstream/Videos/TVB/ChangReThaiGiam/ChangReThaiGiam_01.mp4"
					image="https://s3-us-west-2.amazonaws.com/pnstream/Videos/TVB/Than Dieu Hiep Lu - 2006/thandieudaihiep2006-1.jpg"
					isAutoPlay={autoPlay}
					height="400"
					width="400"
				/>
			</div>
		);
	}
}

JWPlayerContainer.propTypes = propTypes;
//JWPlayerContainer.defaultProps = defaultProps;
JWPlayerContainer.displayName = displayName;

export default JWPlayerContainer;
// Required Props
// These are props that modify the basic behavior of the component.

// playerId
// A unique Id for the player instance. Used to distinguish the container divs.
// Type: string
// Example: playerId="my-jw-player-instance"
// playerScript
// Link to a valid JW Player script.
// Type: string
// Example: https://content.jwplatform.com/libraries/abCD1234.js
// playlist OR file
// Link to a valid JW Player playlist or video file, or playlist array. Cool tip: JW Player automatically generates JSON feeds for individual videos if you use the video id in place of abCD1234. You can use this to get meta data on the videos without loading an actual playlist.
// Type: string (for file and playlist) or array (for playlist)
// Example: https//content.jwplatform.com/feeds/abCD1234.json

// Optional Configuration Props
// aspectRatio
// An optional aspect ratio to give the video player. Can be 'inherit', 1:1 or 16:9 currently.
// Defaults to 'inherit'.
// className
// An optional class name to give the container div.
// Type: string
// customProps
// An optional object containing properties to be applied directly to the JW Player instance. Add anything in the API, like skins, into this object. customProps={{ skin: { name: 'six' } }}.
// Type: object
// isAutoPlay
// Determines whether the player starts automatically or not.
// Type: boolean
// isMuted
// Determines whether the player starts muted or not.
// Type: boolean
// generatePrerollUrl(video)
// Supply a function that returns a VAST or GOOGIMA tag for use in generating a preroll advertisement.
// Arguments:
// video
// This is a video object for the current item loaded in the player. You can use it to help generate your preroll tags.
// image
// URL to a poster image to display before playback starts
// Type: string
// licenseKey
// License Key as supplied in the jwplayer dashboard, under: Players > Tools > Downloads > JW Player X (Self-Hosted)
// Type: string
// useMultiplePlayerScripts
// EXPERIMENTAL - Allows you to load multiple player scripts and still load the proper configuration. Expect bugs, but report them!
// Type: boolean
