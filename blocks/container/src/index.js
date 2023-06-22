import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-accordion-container', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
	example: {
		attributes: {
			title: __('Accordion', 'wpd-blocks'),
			hasDescription: true,
			description: __('This is a description.', 'wpd-blocks'),
		},
		innerBlocks: [
			{
				name: 'wpd/block-accordion-item',
				attributes: {
					title: __('Accordion Item 1', 'wpd-blocks'),
				},
			},
			{
				name: 'wpd/block-accordion-item',
				attributes: {
					title: __('Accordion Item 2', 'wpd-blocks'),
					defaultOpen: true,
					hasTopSubtitle: true,
					topSubtitle: __('Opened by default', 'wpd-blocks'),
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							content: __('This is the content of the accordion item.', 'wpd-blocks'),
						},
					},
				],
			},
			{
				name: 'wpd/block-accordion-item',
				attributes: {
					title: __('Accordion Item 3', 'wpd-blocks'),
					hasTopSubtitle: true,
					topSubtitle: __('Top Subtitle', 'wpd-blocks'),
					hasBottomSubtitle: true,
					bottomSubtitle: __('Bottom Subtitle', 'wpd-blocks'),
				},
			},
		],
	},
});
