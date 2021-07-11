
_.Define(_, 'Passthru', (fn) => {
	return function () {
		fn.apply(null, _.Head(arguments).concat([() => {
			_.Last(arguments).apply(null, _.Head(arguments))
		}]))
	}
})
