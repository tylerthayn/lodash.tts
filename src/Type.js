
_.Define(_, 'Type', function (obj, comp) {
	if (typeof comp !== 'undefined') {
		return _.Type(obj).toLowerCase() === (typeof comp === 'string' ? comp.toLowerCase() : _.Type(comp).toLowerCase())
	}

	let type = Object.prototype.toString.call(obj).match(/\[object (.+)\]/i)[1]
	return type != 'Object' ? type : obj.constructor.name || type
})
