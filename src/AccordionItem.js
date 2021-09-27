import { PlainText } from '@wordpress/block-editor/build/components';
import { __ } from '@wordpress/i18n';
import ClassNames from './VO/ClassNames';

export default ({ className, linkText, linkUrl, id, title, content, isEdit = false, onTitleChange = () => {} }) => {
	const wrapperNames = new ClassNames().addToken(className).extendBase('item');

	return (
		<div className={wrapperNames}>
			{linkUrl && linkText && (
				<a href={linkUrl} className={wrapperNames.addElement('link')}>
					{linkText}
				</a>
			)}
			<input type="checkbox" className={wrapperNames.addElement('input')} id={`accordion-input-${id}`} />
			<label htmlFor={`accordion-input-${id}`} className={wrapperNames.addElement('label')}>
				{isEdit ? (
					<PlainText
						value={title}
						onChange={onTitleChange}
						placeholder={__('Enter title', ClassNames.defaultClassBase)}
					/>
				) : (
					<h3 className={wrapperNames.addElement('title')}>{title}</h3>
				)}
				<button className={wrapperNames.addElement('button')}>button</button>
			</label>
			<div className={wrapperNames.addElement('content')}>{content}</div>
		</div>
	);
};
