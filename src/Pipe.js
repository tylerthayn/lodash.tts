
_.Define(_, 'Pipe', function () {
	let fns = _.toArray(arguments)

	return function () {
		let _fns = _.clone(fns)
		let _arguments = _.Head(arguments)
		let _cb = _.Last(arguments)
		if (!(_cb instanceof Function)) throw new Error('Last argument must be a callback function')

		function Process (args) {
			if (_fns.length < 1) {
				_cb.apply(null, args)
			} else {
				let fn = _fns.shift()
				if (!(fn instanceof Function)) throw new Error('Pipe element is not a Function')
				fn.apply(null, _.flatten([args, function () {
					Process(_.toArray(arguments))
				}]))
			}
		}

		Process(_arguments)
	}
})
