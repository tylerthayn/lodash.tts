
_.Define(_, 'DeleteAt', function () {
	if (!_.isArrayLike(_.First(arguments))) throw new Error('Cannot DeleteAt on non ArrayLike object')
	_.pullAt(_.First(arguments), _.Tail(arguments))
	return _.First(arguments)
})
