import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/wp-block-accordion', {
	attributes: {
		id: {
			type: 'string',
		},
		title: {
			type: 'string',
		},
		content: {
			type: 'string',
		},
		linkTitle: {
			type: 'string',
		},
		linkUrl: {
			type: 'string',
		},
	},

	edit: Edit,
	save,
	icon,
});
