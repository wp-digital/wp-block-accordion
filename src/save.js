import { useBlockProps } from '@wordpress/block-editor';
import AccordionItem from './AccordionItem';

export default function save(props) {
	const { className, ...saveRest } = useBlockProps.save();
	const { attributes } = props;
	const save = useBlockProps.save();

	if (JSON.stringify(save) !== '{}') {
		console.log(JSON.stringify(save, null, 2));
		console.log(JSON.stringify(props, null, 2));
	}

	return (
		<AccordionItem
			id={attributes.id}
			className={className}
			content={'content'}
			isEdit
			linkText={'link'}
			linkUrl={'linkUrl'}
			title={attributes.title}
		/>
	);
}
