

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

	require('./noConflict')
	require('./Define')

	/* Array */
	require('./First')
	require('./Head')
	require('./Last')
	require('./Tail')

	/* Object */
	require('./Options')
	require('./Type')

	/* Functional */
	require('./Hook')
	require('./Passthru')
	require('./Pipe')

	return _
}))

