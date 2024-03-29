import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME, HAS_TOP_SUBTITLE_DEFAULT, HAS_BOTTOM_SUBTITLE_DEFAULT } from './constants';

import AccordionItem from './AccordionItem';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		defaultOpen = false,
		title,
		hasTopSubtitle = HAS_TOP_SUBTITLE_DEFAULT,
		topSubtitle,
		hasBottomSubtitle = HAS_BOTTOM_SUBTITLE_DEFAULT,
		bottomSubtitle,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onDefaultOpenChange = () => onChange('defaultOpen', !defaultOpen);
	const onTitleChange = (value) => onChange('title', value);
	const onHasTopSubtitleChange = () => onChange('hasTopSubtitle', !hasTopSubtitle);
	const onTopSubtitleChange = (value) => onChange('topSubtitle', value);
	const onHasBottomSubtitleChange = () => onChange('hasBottomSubtitle', !hasBottomSubtitle);
	const onBottomSubtitleChange = (value) => onChange('bottomSubtitle', value);

	const classNames = [BLOCK_CLASS_NAME];

	if (defaultOpen) {
		classNames.push(`${BLOCK_CLASS_NAME}_is-opened`);
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
						<ToggleControl
							label={__('Open by default', 'wpd-blocks')}
							checked={defaultOpen}
							onChange={onDefaultOpenChange}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__('Subtitle Settings', 'wpd-blocks')} initialOpen={false}>
					<PanelRow>
						<ToggleControl
							label={__('Show before title', 'wpd-blocks')}
							checked={hasTopSubtitle}
							onChange={onHasTopSubtitleChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Show after title', 'wpd-blocks')}
							checked={hasBottomSubtitle}
							onChange={onHasBottomSubtitleChange}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<AccordionItem
				defaultOpen={defaultOpen}
				title={title}
				hasTopSubtitle={hasTopSubtitle}
				topSubtitle={topSubtitle}
				hasBottomSubtitle={hasBottomSubtitle}
				bottomSubtitle={bottomSubtitle}
				onTitleChange={onTitleChange}
				onTopSubtitleChange={onTopSubtitleChange}
				onBottomSubtitleChange={onBottomSubtitleChange}
				isEdit
			/>
		</div>
	);
}
