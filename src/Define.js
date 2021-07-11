
_.Define = (function () {
	const dataDesc = new Set(['configurable', 'enumerable', 'get', 'set'])
	const accDesc = new Set(['configurable', 'enumerable', 'writable', 'value'])
	const _define = (typeof Reflect !== 'undefined' && Reflect.defineProperty) ? Reflect.defineProperty : Object.defineProperty

	function IsDataDesc(keys){return keys.every(k=>dataDesc.has(k))}
	function IsAccessorDesc(keys){return keys.every(k=>accDesc.has(k))}
	function IsObject (val) {return val != null && typeof val === 'object' && Array.isArray(val) === false}
	function IsDescriptor(obj,key,checkProto){if(!IsObject(obj))return false;let desc=key?Object.getOwnPropertyDescriptor(obj,key):obj;if(!desc&&key&&false!==checkProto&&obj.constructor){desc=Object.getOwnPropertyDescriptor(obj.constructor.prototype,key);if(!IsObject(desc))return false;if('boolean'!=typeof desc.configurable||'boolean'!=typeof desc.enumerable)return false}let keys=Object.keys(desc);return IsDataDesc(keys)?('function'==typeof desc.get||void 0===desc.get)&&('function'==typeof desc.set||void 0===desc.set):!!IsAccessorDesc(keys)&&'boolean'==typeof desc.writable}

	return (obj, key, val, enumerable = false) => {

		if (!IsObject(obj) && typeof obj !== 'function' && !Array.isArray(obj)) {
			throw new TypeError('expected an object, function, or array')
		}

		if (typeof key !== 'string') {
			throw new TypeError('expected "key" to be a string')
		}

		if (IsDescriptor(val)) {
			_define(obj, key, val)
			return obj
		}

		_define(obj, key, {
			configurable: true,
			enumerable: enumerable,
			writable: true,
			value: val
		})

	}
})()
