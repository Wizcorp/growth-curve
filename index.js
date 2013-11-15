var GrowthCurve = function (growthCurve) {
	var inflectionPoints = Object.keys(growthCurve);
	inflectionPoints.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });

	this.inflectionPoints = inflectionPoints;
	this.values = growthCurve;
};

GrowthCurve.prototype.growTo = function (initial, targetLevel) {
	var currentValue = initial;
	var currentLevel = 1;

	for (var i = 0; i < this.inflectionPoints.length; i += 1) {
		var multiplier = this.values[this.inflectionPoints[i]];

		var nextPoint = this.inflectionPoints[i + 1] ? parseInt(this.inflectionPoints[i + 1], 10) : Infinity;

		while (currentLevel < nextPoint - 1 && currentLevel < targetLevel) {
			currentValue = currentValue * multiplier;
			currentLevel += 1;
		}
	}

	return currentValue;
};

module.exports = GrowthCurve;