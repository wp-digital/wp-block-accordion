import { useBlockProps, InnerBlocks, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME } from './constants';
import {
	TITLE_TAG,
	HAS_TITLE_DEFAULT,
	HAS_DESCRIPTION_DEFAULT,
	ALWAYS_OPEN_DEFAULT,
	ALLOWED_BLOCKS,
	TEMPLATE,
} from './constants/editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		hasTitle = HAS_TITLE_DEFAULT,
		title,
		hasDescription = HAS_DESCRIPTION_DEFAULT,
		description,
		alwaysOpen = ALWAYS_OPEN_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onHasTitleChange = () => onChange('hasTitle', !hasTitle);
	const onTitleChange = (value) => onChange('title', value);
	const onHasDescriptionChange = () => onChange('hasDescription', !hasDescription);
	const onDescriptionChange = (value) => onChange('description', value);
	const onAlwaysOpenChange = (value) => onChange('alwaysOpen', value);

	const classNames = [BLOCK_CLASS_NAME];

	if (alwaysOpen) {
		classNames.push(`${BLOCK_CLASS_NAME}_is-always-opened`);
	}

	return (
		<div
			{...useBlockProps({
				className: classNames.join(' '),
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'wpd-blocks')}>
					<PanelRow>
						<ToggleControl label={__('Show title', 'wpd-blocks')} checked={hasTitle} onChange={onHasTitleChange} />
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show description', 'wpd-blocks')}
							checked={hasDescription}
							onChange={onHasDescriptionChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Always open', 'wpd-blocks')}
							help={__('Leaves items open while opening another item.', 'wpd-blocks')}
							checked={alwaysOpen}
							onChange={onAlwaysOpenChange}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={`${BLOCK_CLASS_NAME}__header`}>
				{hasTitle && (
					<RichText
						tagName={TITLE_TAG}
						value={title}
						placeholder={__('Title', 'wpd-blocks')}
						onChange={onTitleChange}
						className={`${BLOCK_CLASS_NAME}__title`}
					/>
				)}
				{hasDescription && (
					<RichText
						tagName="div"
						multiline="p"
						value={description}
						placeholder={__('Description', 'wpd-blocks')}
						onChange={onDescriptionChange}
						className={`${BLOCK_CLASS_NAME}__description`}
					/>
				)}
			</div>
			<div className={`${BLOCK_CLASS_NAME}__list`}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} template={TEMPLATE} />
			</div>
		</div>
	);
}
