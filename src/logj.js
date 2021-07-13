
let json_indent = '\t'
_.Define(_, 'logj', function (v) {
	_.log(JSON.stringify(v, null, json_indent))
})

_.Define(_.logj, 'indent', {set: (s) => {json_indent = s}})
