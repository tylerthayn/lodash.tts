
_.Define(_, 'Each', function () {
	let nonEnumerable = false, obj = _.First(arguments)
	if (_.Type(_.First(arguments, 'boolean'))) {
		nonEnumerable = _.First(arguments)
		obj = arguments[1]
	}

	if (_.isArrayLike(obj)) {
		for (let i=0; i<obj.length; i++) {
			if (_.Last(arguments)(obj[i], i, obj) === false) {return}
		}
	} else {
		let keys = nonEnumerable ? Reflect.ownKeys(obj) : Object.keys(obj)
		for (let i=0; i<keys.length; i++) {
			if (_.Last(arguments)(obj[keys[i]], keys[i], obj) === false) {return}
		}
	}
})
