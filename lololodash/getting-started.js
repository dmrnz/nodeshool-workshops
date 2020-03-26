var _ = require('lodash');

var worker = function(objArray) {
	return _.filter(objArray, { active: true })
}

module.exports = worker