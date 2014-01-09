var GrowthCurve = function (growthCurve) {
	var points = Object.keys(growthCurve);

	// convert points into numbers.
	for (var i = 0; i < points.length; i += 1) {
		points[i] = parseFloat(points[i], 10);
	}

	this.points = points.sort(function (a,b) { return a > b; });

	this.values = growthCurve;
};

GrowthCurve.prototype.growTo = function (initial, targetLevel) {
	var value = initial;
	var level = 1;
	var points = this.points.slice().reverse();

	while (points.length) {
		var point = points.pop();

		var multiplier = this.values.hasOwnProperty(point.toString()) ? this.values[point] : 1;
		var nextPoint = points.length ? points[points.length - 1] : Infinity;

		while (level + 1 < nextPoint) {
			if (level >= targetLevel) {
				return value;
			}

			value = value * multiplier;
			level += 1;
		}
	}

	return value;
};

GrowthCurve.prototype.getPoint = function (level) {
	var point;

	for (var i = 0; i < this.points.length; i += 1) {
		if (level < this.points[i]) {
			return point
		}
		point = this.points[i];
	}

	return point;
}

GrowthCurve.prototype.getRate = function (level) {
	var point = this.getPoint(level);
	var out = this.values.hasOwnProperty(point) ? this.values[point] : 1;

	return out;
};

module.exports = GrowthCurve;
