import domReady from '@wordpress/dom-ready';

import { BLOCK_CLASS_NAME } from './constants';

const ITEM_BLOCK_CLASS_NAME = `${BLOCK_CLASS_NAME}-item`;

const open = (item) => {
	item.classList.add(`${ITEM_BLOCK_CLASS_NAME}_is-opened`);

	const header = item.querySelector(`.${ITEM_BLOCK_CLASS_NAME}__header`);

	if (header) {
		header.setAttribute('aria-expanded', 'true');
	}

	return item;
};

const close = (item) => {
	item.classList.remove(`${ITEM_BLOCK_CLASS_NAME}_is-opened`);

	const header = item.querySelector(`.${ITEM_BLOCK_CLASS_NAME}__header`);

	if (header) {
		header.setAttribute('aria-expanded', 'false');
	}

	return item;
};

const closeSiblings = (opened) => {
	const container = opened.closest(`.${BLOCK_CLASS_NAME}`);
	const siblings = [];

	if (!container) {
		return siblings;
	}

	container.querySelectorAll(`.${ITEM_BLOCK_CLASS_NAME}`).forEach((item) => {
		if (opened === item) {
			return;
		}

		siblings.push(close(item));
	});

	return siblings;
};

const toggle = (item) => {
	const container = item.closest(`.${BLOCK_CLASS_NAME}`);

	if (!container) {
		return item;
	}

	if (item.classList.contains(`${ITEM_BLOCK_CLASS_NAME}_is-opened`)) {
		return close(item);
	}

	if (!container.classList.contains(`${BLOCK_CLASS_NAME}_is-always-opened`)) {
		closeSiblings(item);
	}

	return open(item);
};

const handleToggle = (event) => {
	const item = event.currentTarget.closest(`.${ITEM_BLOCK_CLASS_NAME}`);

	if (item) {
		toggle(item);
	}
};

const onHeaderClick = (event) => {
	if (event.target.tagName !== 'A') {
		handleToggle(event);
	}
};

const onHeaderKeyDown = (event) => {
	if (event.key === 'Enter') {
		handleToggle(event);
	}
};

const onReady = () => {
	document.querySelectorAll(`.${BLOCK_CLASS_NAME}`).forEach((container) => {
		container.querySelectorAll(`.${ITEM_BLOCK_CLASS_NAME}`).forEach((item) => {
			const header = item.querySelector(`.${ITEM_BLOCK_CLASS_NAME}__header`);

			if (!header) {
				return;
			}

			header.addEventListener('click', onHeaderClick);
			header.addEventListener('keydown', onHeaderKeyDown);
		});
	});
};

domReady(onReady);
