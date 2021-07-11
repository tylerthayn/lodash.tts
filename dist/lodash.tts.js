

(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['lodash'], factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('lodash'))
	} else {
		factory(typeof lodash !== 'undefined' ? lodash : typeof _ !== 'undefined' ? _ : undefined)
	}
}(function (_) {
	if (typeof _ === 'undefined') {throw new Error('Invalid lodash/_ reference')}

	_ = _.noConflict()
	
	
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
	

	/* Array */
	/**
	 * Returns the first element of an ArrayLike object
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Array
	 * @param {ArrayLike}
	 * @returns {*}
	 */
	_.Define(_, 'First', function (a) {
		if (!_.isArrayLike(a)) {
			throw new Error('Item not array-like')
		} else {
			return a[0]
		}
	})
	
	_.Define(_, 'Head', function (a) {
		if (!_.isArrayLike(a)) {
			throw new Error('Item not array-like')
		} else {
			return Array.prototype.slice.call(a, 0, -1)
		}
	})
	
	_.Define(_, 'Last', function (a) {
		if (!_.isArrayLike(a)) {
			throw new Error('Item not array-like')
		} else {
			return a[a.length - 1]
		}
	})
	
	_.Define(_, 'Tail', function (a) {
		if (!_.isArrayLike(a)) {
			throw new Error('Item not array-like')
		} else {
			return Array.prototype.slice.call(a, 1)
		}
	})
	

	/* Object */
	
	_.Define(_, 'Options', function () {
		return _.merge.apply(null, _.flatten([{}, arguments]))
	})
	
	
	_.Define(_, 'Type', function (obj, comp) {
		if (typeof comp !== 'undefined') {
			return _.Type(obj).toLowerCase() === (typeof comp === 'string' ? comp.toLowerCase() : _.Type(comp).toLowerCase())
		}
	
		let type = Object.prototype.toString.call(obj).match(/\[object (.+)\]/i)[1]
		return type != 'Object' ? type : obj.constructor.name || type
	})
	

	/* Functional */
	
	_.Define(_, 'Hook', function () {
		let fn = _.First(arguments)
		let hooks = _.Tail(arguments)
	
		return function () {
			let _arguments = _.toArray(arguments)
			let _cb = (_.Last(_arguments) instanceof Function) ? _arguments.pop() : null
			hooks.forEach((hook) => {
				if (hook instanceof Function) hook.apply(null, _arguments)
			})
			if (_cb !== null) _arguments.push(_cb)
			return fn.apply(null, _arguments)
		}
	})
	
	
	_.Define(_, 'Passthru', (fn) => {
		return function () {
			fn.apply(null, _.Head(arguments).concat([() => {
				_.Last(arguments).apply(null, _.Head(arguments))
			}]))
		}
	})
	
	
	_.Define(_, 'Pipe', function () {
		let fns = _.toArray(arguments)
	
		return function () {
			let _fns = _.clone(fns)
			let _arguments = _.Head(arguments)
			let _cb = _.Last(arguments)
			if (!(_cb instanceof Function)) throw new Error('Last argument must be a callback function')
	
			function Process (args) {
				if (_fns.length < 1) {
					_cb.apply(null, args)
				} else {
					let fn = _fns.shift()
					if (!(fn instanceof Function)) throw new Error('Pipe element is not a Function')
					fn.apply(null, _.flatten([args, function () {
						Process(_.toArray(arguments))
					}]))
				}
			}
	
			Process(_arguments)
		}
	})
	

	return _
}))

