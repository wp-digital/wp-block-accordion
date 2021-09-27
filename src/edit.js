import { useBlockProps } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';

import './editor.scss';
import AccordionItem from './AccordionItem';

export default function Edit({ setAttributes, attributes }) {
	const [id] = useState(Math.random());

	const onChange = (key, content) => {
		setAttributes({ [key]: content });
	};

	useEffect(() => {
		onChange('id', id);
	}, []);
	const onTitleChange = (content) => onChange('title', content);

	const { className } = useBlockProps();

	return (
		<AccordionItem
			id={id}
			className={className}
			content={'content'}
			onTitleChange={onTitleChange}
			isEdit
			linkText={'link'}
			linkUrl={'linkUrl'}
			title={attributes.title}
		/>
	);
}
