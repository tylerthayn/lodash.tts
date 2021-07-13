
_.Define(_, 'Match', function (s, m) {
	if (!Type(s, 'string')) throw new Error('Cannot match on non-string element')
	return !(s.match(m) == null)
})
