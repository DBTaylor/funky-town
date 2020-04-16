"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.never = function (_) { return _; };
exports.fix = function (f) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return f(exports.fix(f)).apply(void 0, args);
}; };
function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st, tu, uv, vw, wx, xy, yz) {
    var x = a;
    for (var _i = 0, _a = [ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st, tu, uv, vw, wx, xy, yz]; _i < _a.length; _i++) {
        var f = _a[_i];
        if (f)
            x = f(x);
        else
            break;
    }
    return x;
}
exports.pipe = pipe;
function set(source, path, val) {
    var keys;
    var last;
    if (Array.isArray(path)) {
        keys = __spreadArrays(path);
        last = keys.pop();
    }
    else {
        keys = [];
        last = path;
    }
    var temp = source;
    var dests = [Object.assign({}, temp)];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        temp = temp[key];
        dests.push(Array.isArray(temp) ? __spreadArrays(temp) : Object.assign({}, temp));
    }
    var dest = dests.pop();
    dest[last] = val;
    while (keys.length) {
        temp = dests.pop();
        temp[keys.pop()] = dest;
        dest = temp;
    }
    return dest;
}
exports.set = set;
function over(source, path, f) {
    var keys;
    var last;
    if (Array.isArray(path)) {
        keys = __spreadArrays(path);
        last = keys.pop();
    }
    else {
        keys = [];
        last = path;
    }
    var temp = source;
    var dests = [Object.assign({}, temp)];
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        temp = temp[key];
        dests.push(Array.isArray(temp) ? __spreadArrays(temp) : Object.assign({}, temp));
    }
    var dest = dests.pop();
    dest[last] = f(dest[last]);
    while (keys.length) {
        temp = dests.pop();
        temp[keys.pop()] = dest;
        dest = temp;
    }
    return dest;
}
exports.over = over;
exports.assignPartial = function (s, p) {
    var obj = Object.assign({}, s);
    return Object.assign(obj, p);
};
var applyUpdate = function (setter, update) {
    return setter(function (s) { return exports.assignPartial(s, (typeof update == 'function') ? update(s) : update); });
};
var executeAction = function (setter, action) {
    if (Array.isArray(action)) {
        if (action[0] == 'yield_and') {
            applyUpdate(setter, action[1]);
            action[2].then(function (a) { return executeAction(setter, a); });
        }
        else {
            applyUpdate(setter, action[1]);
            action[2].then(function (a) {
                return setter(function (s) {
                    setTimeout(function () { return executeAction(setter, a(s)); }, 0);
                    return s;
                });
            });
        }
        return;
    }
    if (typeof action.then == 'function') {
        action.then(function (u) { return applyUpdate(setter, u); });
    }
    else {
        applyUpdate(setter, action);
    }
};
exports.bindAction = function (setter, action) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return executeAction(setter, action.apply(void 0, args));
    };
};
exports.objectMap = function (object, mapFn) {
    return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(object[key]);
        return result;
    }, {});
};
exports.actions = function (setter, actions) {
    return exports.objectMap(actions, function (action) { return exports.bindAction(setter, action); });
};
exports.yield_and = function (update, promise) {
    return ['yield_and', update, promise];
};
exports.yield_then = function (update, promise) {
    return ['yield_then', update, promise];
};
