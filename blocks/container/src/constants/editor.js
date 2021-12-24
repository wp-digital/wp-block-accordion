import { applyFilters } from '@wordpress/hooks';

export const TITLE_TAG = applyFilters('innocode.block-accordion.title.tag', 'h3');

export const HAS_TITLE_DEFAULT = applyFilters('innocode.block-accordion.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('innocode.block-accordion.has_description.default', false);
export const ALWAYS_OPEN_DEFAULT = applyFilters('innocode.block-accordion.always_open.default', false);

export const ALLOWED_BLOCKS = ['innocode/block-accordion-item'];
