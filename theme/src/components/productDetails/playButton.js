import React from 'react';
import * as helper from '../../lib/helper';
import { themeSettings, text } from '../../lib/settings';

const PlayButton = ({ product, playVideo }) => {
	let buttonStyle = {};
	if (
		themeSettings.button_addtocart_bg &&
		themeSettings.button_addtocart_bg.length > 0
	) {
		buttonStyle.backgroundColor = themeSettings.button_addtocart_bg;
	}
	if (
		themeSettings.button_addtocart_color &&
		themeSettings.button_addtocart_color.length > 0
	) {
		buttonStyle.color = themeSettings.button_addtocart_color;
	}

	let playButtonText = 'Coi phim';

	if (product.stock_status === 'discontinued') {
		return (
			<button
				className="button is-dark is-fullwidth"
				style={buttonStyle}
				disabled
			>
				{text.discontinued}
			</button>
		);
	} else if (product.stock_status === 'available') {
		return (
			<button
				className="button is-success is-fullwidth"
				style={buttonStyle}
				onClick={playVideo} //{addCartItem}
			>
				{playButtonText}
			</button>
		);
	} else {
		return null;
	}
};

export default PlayButton;
