[![Build Status](https://travis-ci.org/bjornstar/growth-curve.png)](https://travis-ci.org/bjornstar/growth-curve)

growth-curve
============

Calculate compound growth with inflection points.

Example:
```javascript
var GrowthCurve = require('growth-curve');

var killerGrowth = new GrowthCurve({ "1": 1.02, "5": 1.10, "25": 1.20, "46": 2 });

var healthAt47 = gentleGrowth.growTo(100, 47);
```

###Constructor
####new GrowthCurve( *inflectionPoints* )
**inflectionPoints** is an object with rules governing the compound rates at the iterations where
they change.

###Methods
####growTo( *initial*, *target* );
Returns the value of **initial** after it has been compounded **target** number of times with
changes to the rate set according to the rules given in the constructor.