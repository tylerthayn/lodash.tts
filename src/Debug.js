
_.global.DEBUG = {}
_.Define(_, 'Debug', function (name, print) {
	let logger = typeof print === 'undefined' ? function () {} : print == 'json' ? _.logj : _.log

	return function () {
		let cb = _.Last(arguments) instanceof Function ? _.Last(arguments) : null
		_.global.DEBUG[name] = _.Last(arguments) instanceof Function ? _.Head(arguments) : _.toArray(arguments)
		logger(_.global.DEBUG[name])
		if (cb !== null) cb.apply(null, _.global.DEBUG[name])
		return _.global.DEBUG[name]
	}
})


