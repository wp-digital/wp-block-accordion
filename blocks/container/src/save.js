import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

import { BLOCK_CLASS_NAME } from './constants';
import {
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	ALLOWED_BLOCKS,
	ALWAYS_OPEN_DEFAULT,
} from './constants/editor';

export default function save({ attributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		alwaysOpen = ALWAYS_OPEN_DEFAULT,
	} = attributes;
	const classNames = [BLOCK_CLASS_NAME];

	if (alwaysOpen) {
		classNames.push(`${BLOCK_CLASS_NAME}_is-always-opened`);
	}

	return (
		<div
			{...useBlockProps.save({
				className: classNames.join(' '),
			})}
		>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && <RichText.Content tagName={TITLE_TAG} className={`${BLOCK_CLASS_NAME}__title`} value={title} />}
				{hasDescription && (
					<RichText.Content
						tagName="div"
						multiline="p"
						value={description}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className={`${BLOCK_CLASS_NAME}__list`}>
				<InnerBlocks.Content allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
}
