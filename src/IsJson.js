
_.Define(_, 'IsJson', function (s) {
	if (!Type(s, 'string')) throw new Error('Cannot check non string as JSON')
	try {
		JSON.parse(s)
	} catch (e) {
		return false
	}
	return true
})
