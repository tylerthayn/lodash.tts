
_.Define(_, 'global', {get: () => {
	return typeof global === 'object' ? global :
		typeof window === 'object' ? window :
			this
}})
