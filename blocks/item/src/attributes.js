import { BLOCK_CLASS_NAME, HAS_TOP_SUBTITLE_DEFAULT, HAS_BOTTOM_SUBTITLE_DEFAULT } from './constants';

export default {
	defaultOpen: {
		type: 'boolean',
		default: false,
	},
	title: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__title`,
	},
	hasTopSubtitle: {
		type: 'boolean',
		default: HAS_TOP_SUBTITLE_DEFAULT,
	},
	topSubtitle: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__subtitle_top`,
	},
	hasBottomSubtitle: {
		type: 'boolean',
		default: HAS_BOTTOM_SUBTITLE_DEFAULT,
	},
	bottomSubtitle: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__subtitle_bottom`,
	},
};
