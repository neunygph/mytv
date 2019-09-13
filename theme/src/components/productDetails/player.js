import React, { Fragment } from 'react';
import ReactModal from 'react-modal';
import JWPlayerContainer from '../../containers/jwplayer';

ReactModal.setAppElement('#app');

export default class PlayerModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: this.props.showModal
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		console.log();
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}
	componentWillReceiveProps(props) {
		this.setState({ showModal: props.showModal });
	}
	render() {
		return (
			<div id="player-container">
				<ReactModal
					isOpen={this.state.showModal}
					onRequestClose={this.handleCloseModal}
					className="Playermodal"
					overlayClassName="Playeroverlay"
					shouldFocusAfterRender={true}
					shouldReturnFocusAfterClose={true}
					shouldCloseOnEsc={true}
					data={{
						mydata: 'test'
					}}
				>
					<JWPlayerContainer videoTitle="mytesttitle" />
					<button id="modal-close" onClick={this.handleCloseModal}>
						Close
					</button>
				</ReactModal>
			</div>
		);
	}
}
