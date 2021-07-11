
_.Define(_, 'Options', function () {
	return _.merge.apply(null, _.flatten([{}, arguments]))
})
