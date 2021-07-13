

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
	require('./Type')
	require('./global')

	/* Array */
	require('./Delete')
	require('./DeleteAt')
	require('./First')
	require('./Head')
	require('./Last')
	require('./Shuffle')
	require('./Tail')

	/* Object */
	require('./Each')
	require('./Trim')

	/* Functional */
	require('./Hook')
	require('./Noop')
	require('./Passthru')
	require('./Pipe')

	/* String */
	require('./AsAscii')
	require('./AsBase64')
	require('./IsBase64')
	require('./IsJson')
	require('./Match')

	/* Util */
	require('./Debug')
	require('./Hash')
	require('./log')
	require('./logj')

	require('./Options')


	return _
}))

