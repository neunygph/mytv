import React from 'react';

const episodeList = _num => {
	const episodes = [];
	for (let i = 1; i <= _num; i++) {
		episodes.push(<option value={i}>{i}</option>);
	}
	return episodes;
};

export default class EpisodeDropdown extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	_playVideo(selectedEpi) {
		{
			this.props.playVideo(selectedEpi);
		}
	}
	render() {
		return (
			<select
				className="epi-dropdown"
				onChange={e => {
					this._playVideo(e.target.value);
				}}
			>
				{episodeList(this.props.episodeNum)}
			</select>
		);
	}
}
