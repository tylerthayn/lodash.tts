_.Define(_, 'Tail', function (a) {
	if (!_.isArrayLike(a)) {
		throw new Error('Item not array-like')
	} else {
		return Array.prototype.slice.call(a, 1)
	}
})
