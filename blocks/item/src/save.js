import { useBlockProps } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME, HAS_TOP_SUBTITLE_DEFAULT, HAS_BOTTOM_SUBTITLE_DEFAULT } from './constants';

import AccordionItem from './AccordionItem';

export default function save({ attributes }) {
	const {
		defaultOpen = false,
		title,
		hasTopSubtitle = HAS_TOP_SUBTITLE_DEFAULT,
		topSubtitle,
		hasBottomSubtitle = HAS_BOTTOM_SUBTITLE_DEFAULT,
		bottomSubtitle,
	} = attributes;
	const classNames = [BLOCK_CLASS_NAME];

	if (defaultOpen) {
		classNames.push(`${BLOCK_CLASS_NAME}_is-opened`);
	}

	return (
		<div
			{...useBlockProps.save({
				className: classNames.join(' '),
			})}
		>
			<AccordionItem
				defaultOpen={defaultOpen}
				title={title}
				hasTopSubtitle={hasTopSubtitle}
				topSubtitle={topSubtitle}
				hasBottomSubtitle={hasBottomSubtitle}
				bottomSubtitle={bottomSubtitle}
			/>
		</div>
	);
}
