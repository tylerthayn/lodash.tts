
_.Define(_, 'Shuffle', function (a, seed = 1000) {
	if (!_.isArrayLike(a)) throw new Error('Cannot shuffle a non-Array-like object')
	let i, j, shuffleItem
	if (a.length <= 2) return a

	for (i = 0; i < a.length - 2; i++) {
		j = (Math.round(Math.random() * seed) + i) % a.length
		shuffleItem = a[i]
		a[i] = a[j]
		a[j] = shuffleItem
	}
	return a
})
