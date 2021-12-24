import { RichText, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import {
	BLOCK_CLASS_NAME,
	TITLE_TAG,
	HAS_TOP_SUBTITLE_DEFAULT,
	HAS_BOTTOM_SUBTITLE_DEFAULT,
	CONTENT_ALIGNMENT_DEFAULT,
} from './constants';

const AccordionItemSubtitle = ({ value, onChange, place, isEdit }) => {
	const className = `${BLOCK_CLASS_NAME}__subtitle ${BLOCK_CLASS_NAME}__subtitle_${place}`;

	if (!isEdit) {
		return !!value && <RichText.Content tagName="span" multiline={false} value={value} className={className} />;
	}

	return (
		<RichText
			tagName="span"
			multiline={false}
			value={value}
			placeholder={__('Subtitle', 'innocode-block-accordion')}
			onChange={onChange}
			className={className}
		/>
	);
};

const AccordionItemTitle = ({ value, onChange, isEdit }) => {
	const className = `${BLOCK_CLASS_NAME}__title`;

	return isEdit ? (
		<RichText
			tagName={TITLE_TAG}
			multiline={false}
			value={value}
			placeholder={__('Title', 'innocode-block-accordion')}
			onChange={onChange}
			className={className}
		/>
	) : (
		<RichText.Content tagName={TITLE_TAG} multiline={false} className={className} value={value} />
	);
};

const AccordionItemContent = ({ value, onChange, alignment, onAlignmentChange, isEdit }) => {
	let className = `${BLOCK_CLASS_NAME}__content`;

	if (alignment !== 'none') {
		className += ` ${BLOCK_CLASS_NAME}__content_${alignment}`;
	}

	return isEdit ? (
		<>
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={onAlignmentChange} />
			</BlockControls>
			<RichText
				tagName="div"
				multiline="p"
				value={value}
				placeholder={__('Content', 'innocode-block-accordion')}
				onChange={onChange}
				className={className}
			/>
		</>
	) : (
		<RichText.Content tagName="div" multiline="p" value={value} className={className} />
	);
};

export default function AccordionItem({
	defaultOpen,
	title,
	hasTopSubtitle = HAS_TOP_SUBTITLE_DEFAULT,
	topSubtitle,
	hasBottomSubtitle = HAS_BOTTOM_SUBTITLE_DEFAULT,
	bottomSubtitle,
	content,
	contentAlignment = CONTENT_ALIGNMENT_DEFAULT,
	onTitleChange = () => {},
	onTopSubtitleChange = () => {},
	onBottomSubtitleChange = () => {},
	onContentChange = () => {},
	onContentAlignmentChange = () => {},
	isEdit = false,
}) {
	return (
		<>
			<div
				className={`${BLOCK_CLASS_NAME}__header`}
				role="button"
				aria-expanded={defaultOpen ? 'true' : 'false'}
				tabIndex={0}
			>
				{hasTopSubtitle && (
					<AccordionItemSubtitle value={topSubtitle} onChange={onTopSubtitleChange} place="top" isEdit={isEdit} />
				)}
				<AccordionItemTitle value={title} onChange={onTitleChange} isEdit={isEdit} />
				{hasBottomSubtitle && (
					<AccordionItemSubtitle
						value={bottomSubtitle}
						onChange={onBottomSubtitleChange}
						place="bottom"
						isEdit={isEdit}
					/>
				)}
				<span className={`${BLOCK_CLASS_NAME}__button`}>{__('Toggle', 'innocode-block-accordion')}</span>
			</div>
			<AccordionItemContent
				value={content}
				onChange={onContentChange}
				alignment={contentAlignment}
				onAlignmentChange={onContentAlignmentChange}
				isEdit={isEdit}
			/>
		</>
	);
}
