class ClassNames {
	static defaultClassBase = 'innocode-block-accordion';

	/**
	 *
	 * @private
	 * @type {string}
	 */
	_baseClassName;

	/**
	 *
	 * @type {string[]}
	 * @private
	 */
	_tokens = [];

	constructor(baseClassName) {
		this._baseClassName = baseClassName || ClassNames.defaultClassBase;
	}

	/**
	 *
	 * @param {string} name
	 * @return {ClassNames} ClassNames
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
	 * @return {ClassNames} ClassNames
	 */
	extendBase = (token) => {
		this._baseClassName = `${this._baseClassName}_${token}`;

		return this.addToken(this._baseClassName);
	};

	/**
	 *
	 * @param {string} name
	 * @return {ClassNames} ClassNames
	 */
	addElement = (name) => {
		return this.addToken([this._baseClassName, '__', name].join(''));
	};

	/**
	 *
	 * @return {string} string
	 */
	toString = () => {
		const clone = [...this._tokens];

		return clone.join(' ');
	};
}

export default ClassNames;
