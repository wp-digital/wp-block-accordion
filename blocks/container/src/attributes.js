import { BLOCK_CLASS_NAME } from './constants';
import { HAS_TITLE_DEFAULT, HAS_DESCRIPTION_DEFAULT, ALWAYS_OPEN_DEFAULT } from './constants/editor';

export default {
	hasTitle: {
		type: 'boolean',
		default: HAS_TITLE_DEFAULT,
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	hasDescription: {
		type: 'boolean',
		default: HAS_DESCRIPTION_DEFAULT,
	},
	description: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__description`,
	},
	alwaysOpen: {
		type: 'boolean',
		default: ALWAYS_OPEN_DEFAULT,
	},
};
