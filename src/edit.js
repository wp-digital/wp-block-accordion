import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';

import AccordionItem from './AccordionItem.js';

import './editor.scss';

export default function Edit({ setAttributes, attributes }) {
	const [id] = useState(`accordion-input-${Math.random()}`);

	const onChange = (key, content) => {
		setAttributes({ [key]: content });
	};

	useEffect(() => {
		onChange('id', id);
	}, []);
	const onTitleChange = (content) => onChange('title', content);
	const onContentChange = (content) => onChange('content', content);
	const onAlignmentChange = (content) => onChange('alignment', content);
	const onLinkChange = (content) => onChange('link', content);

	const { className, ...props } = useBlockProps();

	return (
		<AccordionItem
			id={id}
			className={className}
			content={attributes.content}
			onTitleChange={onTitleChange}
			onContentChange={onContentChange}
			isEdit
			title={attributes.title}
			onAlignmentChange={onAlignmentChange}
			link={attributes.link}
			onLinkChange={onLinkChange}
			alignment={attributes.alignment}
			attributesClassName={attributes.className}
			props={props}
		/>
	);
}
