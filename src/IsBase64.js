
_.Define(_, 'IsBase64', function (s) {
	if (!Type(s, 'string')) throw new Error('Cannot check non string as base64')
	return s.toString() === s.AsAscii(true).AsBase64(true)
})
