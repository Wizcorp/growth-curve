var assert = require('assert');

var GrowthCurve = require('..');

var growthCurveData = {
	"strong": {
		"1": 1.02,
		"20": 1.05,
		"40": 1.07,
		"101": 1.1
	},
	"flat": {
		"1": 1
	},
	"gentle": {
		"1": 1.02
	}
};

var gentleResults = [ 1000, 1020, 1040, 1061, 1082, 1104, 1126, 1149, 1172, 1195, 1219, 1243, 1268, 1294, 1319, 1346, 1373, 1400, 1428, 1457, 1486, 1516, 1546, 1577, 1608, 1641, 1673, 1707, 1741, 1776, 1811, 1848, 1885, 1922, 1961, 2000, 2040, 2081, 2122, 2165, 2208, 2252, 2297, 2343, 2390, 2438, 2487, 2536, 2587, 2639, 2692, 2745, 2800, 2856, 2913, 2972, 3031, 3092, 3154, 3217, 3281, 3347, 3414, 3482, 3551, 3623, 3695, 3769, 3844, 3921, 4000, 4080, 4161, 4244, 4329, 4416, 4504, 4594, 4686, 4780, 4875, 4973, 5072, 5174, 5277, 5383, 5491, 5600, 5712, 5827, 5943, 6062, 6183, 6307, 6433, 6562, 6693, 6827, 6963, 7103 ];
var strongResults = [ 10000, 10200, 10404, 10612, 10824, 11041, 11262, 11487, 11717, 11951, 12190, 12434, 12682, 12936, 13195, 13459, 13728, 14002, 14282, 14997, 15746, 16534, 17360, 18228, 19140, 20097, 21102, 22157, 23265, 24428, 25649, 26932, 28278, 29692, 31177, 32736, 34372, 36091, 37896, 40548, 43387, 46424, 49673, 53151, 56871, 60852, 65112, 69670, 74546, 79765, 85348, 91323, 97715, 104555, 111874, 119705, 128085, 137051, 146644, 156909, 167893, 179645, 192221, 205676, 220073, 235478, 251962, 269599, 288471, 308664, 330271, 353390, 378127, 404596, 432917, 463222, 495647, 530342, 567466, 607189, 649692, 695171, 743833, 795901, 851614, 911227, 975013, 1043264, 1116292, 1194433, 1278043, 1367506, 1463232, 1565658, 1675254, 1792522, 1917998, 2052258, 2195916, 2349630 ];

var growthCurves = {};

for (var growthCurveId in growthCurveData) {
	var growthCurve = growthCurveData[growthCurveId];

	growthCurves[growthCurveId] = new GrowthCurve(growthCurve);
}

describe('Growth Curves', function () {
	it('All levels of the \"flat\" growth curve are the same', function () {
		var initialValue = 100;
		for (var i = 1; i < 200; i += 1) {
			assert.equal(initialValue, growthCurves.flat.growTo(initialValue, i));
		}
	});

	it('The \"gentle\" growth curve matches the pre-calculated values', function () {
		var initialValue = 1000;
		for (var i = 1; i < gentleResults.length; i += 1) {
			assert.equal(gentleResults[i - 1], Math.round(growthCurves.gentle.growTo(initialValue, i)));
		}
	});

	it('The \"strong\" growth curve matches the pre-calculated values', function () {
		var initialValue = 10000;
		for (var i = 1; i < strongResults.length; i += 1) {
			assert.equal(strongResults[i - 1], Math.round(growthCurves.strong.growTo(initialValue, i)));
		}
	});
});