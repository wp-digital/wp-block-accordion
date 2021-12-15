import { RichText, PlainText, AlignmentToolbar, BlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import ClassNames from './VO/ClassNames';

export default function AccordionItem({
	className,
	link,
	id,
	title,
	content,
	isEdit = false,
	alignment = '',
	attributesClassName = '',
	onTitleChange = () => {},
	onLinkChange = () => {},
	onAlignmentChange = () => {},
	onContentChange = () => {},
	props = {},
}) {
	const wrapperNames = () => new ClassNames().addToken(className);
	const linkRenderComponent = link ? (
		<div className={wrapperNames().addElement('link').toString()}>
			<RichText.Content value={link} />
		</div>
	) : (
		<></>
	);

	return (
		<div className={wrapperNames().extendBase('item').toString()} {...props}>
			{isEdit ? (
				<div className={wrapperNames().addElement('link').toString()}>
					<RichText
						multiline={false}
						value={link}
						onChange={onLinkChange}
						placeholder={__('Enter link', 'innocode-block-accordion')}
					/>
				</div>
			) : (
				linkRenderComponent
			)}
			<input type="checkbox" className={wrapperNames().addElement('input').toString()} id={id} />
			<label htmlFor={isEdit || content ? id : ''} className={wrapperNames().addElement('label').toString()}>
				{isEdit ? (
					<PlainText
						value={title}
						onChange={onTitleChange}
						placeholder={__('Enter title', 'innocode-block-accordion')}
					/>
				) : (
					<h3 className={wrapperNames().addElement('title').toString()}>{title}</h3>
				)}
				{(isEdit || content) && (
					<div role="button" className={wrapperNames().addElement('button').toString()}>
						button
					</div>
				)}
			</label>
			{isEdit ? (
				<div className={wrapperNames().addElement('content').toString()}>
					<BlockControls>
						<AlignmentToolbar value={alignment} onChange={onAlignmentChange} />
					</BlockControls>
					<RichText
						value={content}
						onChange={onContentChange}
						style={{ textAlign: alignment }}
						className={attributesClassName}
						placeholder={__('Enter content', 'innocode-block-accordion')}
					/>
				</div>
			) : (
				<div className={wrapperNames().addElement('content').toString()}>
					<RichText.Content value={content} />
				</div>
			)}
		</div>
	);
}
