
_.Define(_, 'Hook', function () {
	let fn = _.First(arguments)
	let hooks = _.Tail(arguments)

	return function () {
		let _arguments = _.toArray(arguments)
		let _cb = (_.Last(_arguments) instanceof Function) ? _arguments.pop() : null
		hooks.forEach((hook) => {
			if (hook instanceof Function) hook.apply(null, _arguments)
		})
		if (_cb !== null) _arguments.push(_cb)
		return fn.apply(null, _arguments)
	}
})
