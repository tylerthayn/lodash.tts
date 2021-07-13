
_.Define(_, 'Trim', function (obj) {
	if (_.isArrayLike(obj)) {
		_.Delete(obj, undefined)
	} else if (Type(obj, 'object')) {
		Object.keys(obj).forEach((k) => {
			if (typeof obj[k] === 'undefined' || obj[k] == null) {
				delete this[k]
			} else if (Type(obj[k], 'Object')) {
				_.Trim(obj[k])
				if (_.isEqual(obj[k], {})) {
					delete obj[k]
				}
			} else if (_.isArrayLike(obj[k]) && obj[k].length == 0) {
				delete obj[k]
			} else if (Type(obj[k], 'String') && obj[k] == '') {
				delete obj[k]
			} else if (Type(obj[k], 'Number') && Number.isNaN(obj[k])) {
				delete obj[k]
			}
		})
	} else if (Type(obj, 'string')) {
		obj = obj.trim()
	}
	return obj
})
