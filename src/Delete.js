
_.Define(_, 'Delete', function (obj, items) {
	items = _.isArrayLike(items) ? items : [items]
	if (_.isArrayLike(obj)) {
		_.pull(obj, items)
	} else if(Type(obj, 'object')) {
		items.forEach((item) => {
			_.unset(obj, item)
		})
	} else {
		throw new Error('Cannot Delete on non-array or non-object element')
	}
	return obj
})
