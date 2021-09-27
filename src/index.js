import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import icon from './icon';

import './style.scss';

registerBlockType('innocode/wp-block-accordion', {
	apiVersion: 2,
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
		link: {
			type: 'string',
		},
		attributes: {
			type: 'string',
		},
		alignment: {
			type: 'string',
			default: 'none',
		},
	},

	edit: Edit,
	save,
	icon,
});
