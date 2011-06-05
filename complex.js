//   a    b    c    d
// a[0] a[1] b[0] b[1]

var add = function(a, b)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	return [a[0] + b[0], a[1] + b[1]];
};
var sub = function(a, b)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	return [a[0] - b[0], a[1] - b[1]];
};
var mult = function(a, b)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
};
var div = function(a, b)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	var x = b[0] * b[0] + b[1] * b[1];
	return [(a[0] * b[0] + a[1] * b[1]) / x, (a[1] * b[0] - a[0] * b[1]) / x];
};
var abs = function(a)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};
var arg = function(a)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	var r = abs(a);
	if (r == 0)
		return NaN;
	else if (a[1] >= 0)
		return Math.acos(a[0] / r);
	else
		return -Math.acos(a[0] / r);
};
var eq = function(a, b)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	return a[0] == b[0] && a[1] == b[1];
};
var exp = function(a)
{
	if (typeof(a) == "number") a = [a, 0];
	var b = Math.pow(Math.E, a[0]);
	return [b * Math.cos(a[1]), b * Math.sin(a[1])];
};
var ln = function(a)
{
	if (typeof(a) == "number") a = [a, 0];
	var r = abs(a);
	if (r != 0)
		return [Math.log(abs(a)), arg(a)];
	else
		return NaN;
};
var pow = function(a, b)
{
	if (typeof(a) == "number") a = [a, 0];
	if (typeof(b) == "number") b = [b, 0];
	if (eq(a, [0, 0]))
		return [0, 0];
	else
		return exp(mult(ln(a), b));
};
var sqrt = function(a)
{
	return pow(a, [0.5, 0]);
};
var vecmult = function(n, a)
{
	var r = [];
	for (var i in n)
	{
		r[i] = mult(n[i], a);
	}
	return r;
};
var vecadd = function(n1, n2)
{
	var r = [];
	for (var i in n1)
	{
		r[i] = add(n1[i], n2[i]);
	}
	return r;
};
var vecdiv = function(n, a)
{
	var r = [];
	for (var i in n)
	{
		r[i] = div(n[i], a);
	}
	return r;
};
var vecsub = function(n1, n2)
{
	var r = [];
	for (var i in n1)
	{
		r[i] = sub(n1[i], n2[i]);
	}
	return r;
};
var rref = function(M)
{
	var row = 0;
	for (var i = 0; i < M[0].length; i++)
	{
		var z = true;
		for (var j = row; j < M.length; j++)
		{
			if (!eq(M[j][i], [0, 0]))
			{
				M[j] = vecdiv(M[j], M[j][i]);
				if (!z)
				{
					M[j] = vecsub(M[row], M[j]);
				}
				else
				{
					var tmp = M[j];
					M[j] = M[row];
					M[row] = tmp;
					z = false;
				}
			}
		}
		if (!z)
		{
			for (var j = row - 1; j >= 0; j--)
			{
				M[j] = vecsub(M[j], vecmult(M[row], M[j][i]));
			}
			row++;
		}
	}
	
	return M;
};

exports.add = add;
exports.sub = sub;
exports.mult = mult;
exports.div = div;
exports.abs = abs;
exports.arg = arg;
exports.exp = exp;
exports.ln = ln;
exports.pow = pow;
exports.eq = eq;
exports.rref = rref;
