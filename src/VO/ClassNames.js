class ClassNames {
	static defaultDomainBase = 'innocode-block-accordion';
	static defaultClassBase = 'wp-block-innocode-wp-block-accordion';

	/**
	 *
	 * @private
	 * @type string
	 */
	_baseClassName;

	/**
	 *
	 * @type {[string]}
	 * @private
	 */
	_tokens = [];

	constructor(baseClassName) {
		this._baseClassName = baseClassName || ClassNames.defaultClassBase;
	}

	/**
	 *
	 * @param {string} name
	 * @return {ClassNames}
	 */
	addToken = (name) => {
		if (!name) {
			return this;
		}

		this._tokens.push(name);

		return this;
	};

	/**
	 *
	 * @param {string} token
	 * @return {ClassNames}
	 */
	extendBase = (token) => {
		this._baseClassName = `${this._baseClassName}-${token}`;

		return this.addToken(this._baseClassName);
	};

	/**
	 *
	 * @param {string} name
	 * @return {ClassNames}
	 */
	addElement = (name) => {
		return this.addToken([this._baseClassName, '__', name].join(''));
	};

	/**
	 *
	 * @return {string}
	 */
	toString = () => {
		const clone = [...this._tokens];

		return clone.join(' ');
	};
}

export default ClassNames;
