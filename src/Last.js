_.Define(_, 'Last', function (a) {
	if (!_.isArrayLike(a)) {
		throw new Error('Item not array-like')
	} else {
		return a[a.length - 1]
	}
})
