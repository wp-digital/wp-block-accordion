<?php
/**
 * Plugin Name:       Accordion Block
 * Description:       List of items with title and content.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           2.2.0
 * Author:            Innocode
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       innocode-blocks
 *
 * @package           innocode
 */

function innocode_block_accordion_item_block_init() {
	register_block_type( __DIR__ . '/blocks/container' );
}

add_action( 'init', 'innocode_block_accordion_item_block_init' );

function innocode_block_accordion_container_block_init() {
	register_block_type( __DIR__ . '/blocks/item' );
}

add_action( 'init', 'innocode_block_accordion_container_block_init' );
