const assert = require('assert')
const _ = require('./dist/lodash.tts')



assert.equal(1, _.First([1, 2, 3]))
assert.equal(3, _.Last([1, 2, 3]))
assert.ok(_.isEqual([1,2,3], _.Head([1,2,3,4])))
assert.ok(_.isEqual([2,3], _.Tail([1,2,3])))



function Odd () {
	_.Last(arguments)(_.Head(arguments).filter(n=>n%2))
}

Odd(1,2,3,4,5, console.log)
_.Passthru(Odd)(1,2,3,4,5, console.log)

