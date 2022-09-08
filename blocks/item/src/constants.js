import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'innocode-block-accordion-item';

export const TITLE_TAG = applyFilters('innocode.block-accordion-item.title.tag', 'h4');

export const HAS_TOP_SUBTITLE_DEFAULT = applyFilters('innocode.block-accordion-item.has_top_subtitle.default', false);
export const HAS_BOTTOM_SUBTITLE_DEFAULT = applyFilters(
	'innocode.block-accordion-item.has_bottom_subtitle.default',
	false
);

export const ALLOWED_BLOCKS = applyFilters('innocode.block-accordion-item.allowed_blocks', [
	'core/heading',
	'core/paragraph',
	'core/list',
]);
