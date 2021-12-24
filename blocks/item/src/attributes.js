import {
	BLOCK_CLASS_NAME,
	HAS_TOP_SUBTITLE_DEFAULT,
	HAS_BOTTOM_SUBTITLE_DEFAULT,
	CONTENT_ALIGNMENT_DEFAULT,
} from './constants';

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
	content: {
		type: 'string',
		source: 'html',
		multiline: 'p',
		selector: `.${BLOCK_CLASS_NAME}__content`,
	},
	contentAlignment: {
		type: 'string',
		default: CONTENT_ALIGNMENT_DEFAULT,
	},
};
