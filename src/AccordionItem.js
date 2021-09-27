import {
	RichText,
	PlainText,
	AlignmentToolbar,
	BlockControls,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import ClassNames from './VO/ClassNames';

export const AccordionItem = ({
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
}) => {
	const wrapperNames = () => new ClassNames().addToken(className);

	return (
		<div
			className={wrapperNames()
				.extendBase('item')
				.toString()}
			{...props}
		>
			{isEdit ? (
				<div
					className={wrapperNames()
						.addElement('link')
						.toString()}
				>
					<RichText
						multiline={false}
						value={link}
						onChange={onLinkChange}
						placeholder={__('Enter link', ClassNames.defaultDomainBase)}
					/>
				</div>
			) : link ? (
				<div
					className={wrapperNames()
						.addElement('link')
						.toString()}
				>
					<RichText.Content value={link} />
				</div>
			) : (
				<></>
			)}
			<input
				type="checkbox"
				className={wrapperNames()
					.addElement('input')
					.toString()}
				id={id}
			/>
			<label
				htmlFor={isEdit || content ? id : ''}
				className={wrapperNames()
					.addElement('label')
					.toString()}
			>
				{isEdit ? (
					<PlainText
						value={title}
						onChange={onTitleChange}
						placeholder={__('Enter title', ClassNames.defaultDomainBase)}
					/>
				) : (
					<h3
						className={wrapperNames()
							.addElement('title')
							.toString()}
					>
						{title}
					</h3>
				)}
				{(isEdit || content) && (
					<div
						role="button"
						className={wrapperNames()
							.addElement('button')
							.toString()}
					>
						button
					</div>
				)}
			</label>
			{isEdit ? (
				<div
					className={wrapperNames()
						.addElement('content')
						.toString()}
				>
					<BlockControls>
						<AlignmentToolbar value={alignment} onChange={onAlignmentChange} />
					</BlockControls>
					<RichText
						value={content}
						onChange={onContentChange}
						style={{ textAlign: alignment }}
						className={attributesClassName}
						placeholder={__('Enter content', ClassNames.defaultDomainBase)}
					/>
				</div>
			) : (
				<div
					className={wrapperNames()
						.addElement('content')
						.toString()}
				>
					<RichText.Content value={content} />
				</div>
			)}
		</div>
	);
};
