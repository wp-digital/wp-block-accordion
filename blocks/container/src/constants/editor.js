import { applyFilters } from '@wordpress/hooks';

export const TITLE_TAG = applyFilters('wpd.block-accordion.title.tag', 'h3');

export const HAS_TITLE_DEFAULT = applyFilters('wpd.block-accordion.has_title.default', true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters('wpd.block-accordion.has_description.default', false);
export const ALWAYS_OPEN_DEFAULT = applyFilters('wpd.block-accordion.always_open.default', false);

export const ALLOWED_BLOCKS = ['wpd/block-accordion-item'];

export const TEMPLATE = applyFilters('wpd.block-accordion.template', [['wpd/block-accordion-item', {}]]);
