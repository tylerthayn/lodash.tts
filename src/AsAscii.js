
_.Define(_, 'AsAscii', function (s, test) {
	if (!Type(s, 'string')) throw new Error('Cannot convert non string to ascii')
	try {
		if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(s, 'base64').toString('ascii')} //NodeJs
		if (typeof atob === 'function') {return atob(s)} //Browser
	} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.AsAscii('${s}'): invalid conversion`)}}
	return undefined
})
