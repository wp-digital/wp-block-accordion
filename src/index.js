import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import icon from './icon';

import './style.scss';

registerBlockType( 'innocode/wp-block-accordion', {
	edit: Edit,
	save,
	icon,
} );
