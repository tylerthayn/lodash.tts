/**
 * Returns the first element of an ArrayLike object
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {ArrayLike}
 * @returns {*}
 */
_.Define(_, 'First', function (a) {
	if (!_.isArrayLike(a)) {
		throw new Error('Item not array-like')
	} else {
		return a[0]
	}
})
