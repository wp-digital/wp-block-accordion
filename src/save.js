import { useBlockProps } from '@wordpress/block-editor';
import { AccordionItem } from './AccordionItem.js';

export default function save(props) {
	const { className } = useBlockProps.save();
	const { attributes } = props;

	return (
		<AccordionItem
			id={attributes.id}
			className={className}
			content={attributes.content}
			link={attributes.link}
			title={attributes.title}
		/>
	);
}
