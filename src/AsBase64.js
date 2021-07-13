
_.Define(_, 'AsBase64', function (s, test) {
	if (!Type(s, 'string')) throw new Error('Cannot convert non string to base64')
	try {
		if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(s).toString('base64')} //NodeJs
		if (typeof btoa === 'function') {return btoa(s)} //Browser
	} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.$AsAscii('${s}'): invalid conversion`)}}
	return undefined
})
